import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { SplashScreen } from "@capacitor/splash-screen";
import { App as AppCapacitor, URLOpenListenerEvent } from "@capacitor/app";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/listTopTheme.css";
import { CreateTop, Home, ViewTop, Connection, LoadingPage } from "./pages";
import { Menu } from "./components";
import { useFirebaseLogin } from "./hooks";

const firebaseConfig = {
  apiKey: "AIzaSyD2tGjRNM3HadGCkKsHJK9kmpFKHKVmMWs",
  authDomain: "firstapp-firebase-web-mobile.firebaseapp.com",
  projectId: "firstapp-firebase-web-mobile",
  storageBucket: "firstapp-firebase-web-mobile.appspot.com",
  messagingSenderId: "993475565425",
  appId: "1:993475565425:web:a2ffbf2a7dfbce4a8288d0",
  measurementId: "G-LL6X4WQGY4"
};

const App: React.FC = () => {
  const { user, checkAuth } = useFirebaseLogin();
  const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   SplashScreen.show({
  //     autoHide: false,
  //   });
  // }, []);
  useEffect(() => {
    initializeApp(firebaseConfig);
    checkAuth().then(() => {
      setLoading(false);
      SplashScreen.hide();
    });
  }, [checkAuth]);

  useEffect(() => {
    AppCapacitor.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      // Example url: https://cours-ynov-175ee.web.app/id
      // slug = /id
      const slug = event.url.split(".app").pop();
      alert(slug?.replace("/", ""));
      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);

  console.log(`IONIC::::`, user);
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route
              path="/"
              exact
              render={(_props) =>
                loading ? <LoadingPage /> : user ? <Home /> : <Connection />
              }
            />
            <Route path="/create" exact component={CreateTop} />
            <Route path="/view/:id" exact component={ViewTop} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
