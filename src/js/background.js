const store = window.chrome.storage.sync;
const STORE_KEY = "history";

// Actions
const VISIT_SITE = "VISIT_SITE";

const initState = { lat: null, lng: null };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case VISIT_SITE:
      return { sites: [payload, ...state.sites] };
  }
};

const updateStore = action => {
  store.get(STORE_KEY, state => {
    const nextState = reduceState(state, action);

    store.set({ [STORE_KEY]: nextState });
    console.log(`${STORE_KEY}: `, nextState);
  });
};

const siteGenerator = (url, title) => {
  return { url, title };
};

chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  const { status } = changeInfo;
  const { url, title } = tab;

  if (status === "complete" && url && url.startsWith("http")) {
    updateStore({ type: VISIT_SITE, payload: { url, title } });
  }
});
