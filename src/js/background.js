import Raven from "raven-js";

import { updateStore } from "./storage/store";

Raven.config(
  "https://30f178f4606a43efb7a9d9a844909469@sentry.io/1217951"
).install();

Raven.context(() => {
  const STORE_KEY = "history";

  const initState = { sites: [] };
  const reduceState = (state, { type, payload }) => {
    switch (type) {
      case VISIT_SITE:
        return { sites: [payload, ...state.sites] };
    }
  };

  const dispatch = updateStore(STORE_KEY, reduceState, initState);

  // Actions
  const VISIT_SITE = "VISIT_SITE";

  chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
    const { status, title: newTitle } = changeInfo;
    const { url, title } = tab;

    const isYouTubeSubpage = url.match(/\/www.youtube.com\/.+/);
    const webPageLoaded =
      status === "complete" && url && url.startsWith("http");

    if (!isYouTubeSubpage && webPageLoaded) {
      dispatch({ type: VISIT_SITE, payload: { url, title } });
    } else if (isYouTubeSubpage && !!newTitle) {
      dispatch({ type: VISIT_SITE, payload: { url, title: newTitle } });
    }
  });
});
