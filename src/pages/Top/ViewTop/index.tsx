import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { SocialSharing } from "@ionic-native/social-sharing";
import { useTopList } from "../../../hooks";
import { Top } from "../../../types";
import { shareSocialOutline } from "ionicons/icons";
type ViewTopProps = RouteComponentProps<{
  id: string;
}>;
const ViewTop: React.FC<ViewTopProps> = ({ match }) => {
  const {
    params: { id },
  } = match;
  const { getLists, findTopById } = useTopList();
  const [top, setTop] = useState<Top | undefined>();
  const openLink = (link?: string) => {
    if (!link) return;
    InAppBrowser.create(link, "_blank");
  };
  const shareOnclick = () => {
    SocialSharing.share("Message", "Subject");
  };
  useEffect(() => {
    findTopById(id).then((docSnap: any) => {
      if (docSnap.exists()) {
        setTop(docSnap.data() as Top);
      }
    });
  }, []);
  if (!top) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Liste des top</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="viewTopPage">
          <p>Chargement</p>
        </IonContent>
      </IonPage>
    );
  }
  const { title: titleTop, items } = top;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="secondary">
            <IonButton onClick={shareOnclick}>
              <IonIcon slot="icon-only" icon={shareSocialOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Liste des top</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="viewTopPage">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1># {titleTop}</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {items.map((item) => (
                <IonCard onClick={() => openLink(item.link)}>
                  {item.img && <img src={item.img} />}
                  <IonCardHeader>
                    <IonCardTitle>
                      {item.order}. {item.name}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{item.description}</IonCardContent>
                </IonCard>
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default ViewTop;