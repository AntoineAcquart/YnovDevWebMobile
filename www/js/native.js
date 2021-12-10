function onBatteryStatus(status) {
  console.log("Battery Level Low " + status.level + "%");
}

function onOffline() {
  navigator.notification.alert("You lost your connection !", () => { }, ["Connection lost"], ["OK"])
}

const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
};

const deviceReady = () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
  document.addEventListener("offline", onOffline, false);
};
