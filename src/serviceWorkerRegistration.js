//developers.google.com/web/tools/workbox/modules/workbox-window

import { Workbox } from "workbox-window";

// service worker registration withWorkBox only in production
export default function registerServiceWorker() {
  if ("production" !== process.env.NODE_ENV) {
    return;
  }
  // Check if browser supports serviceWorker )
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");

    wb.addEventListener("installed", (event) => {
      /**
       * We have the condition - event.isUpdate because we don't want to show
       * this message on the very first service worker installation,
       * only on the updated
       */
      if (event.isUpdate) {
        if (confirm(`New app update is available!. Click OK to refresh`)) {
          window.location.reload(); // reload app,cleam chache
        }
      }
    });
    wb.register();
  }
}
