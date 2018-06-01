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
    const { status } = changeInfo;
    const { url, title } = tab;

    if (status === "complete" && url && url.startsWith("http")) {
      dispatch({ type: VISIT_SITE, payload: { url, title } });
    }
  });
});
