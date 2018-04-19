import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);

const STORE_KEY = "history";

const siteGenerator = (url, title) => {
  return { url, title };
};

const initStore = () => {
  store.defaults({ [STORE_KEY]: { sites: [] } });
};

chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  const { status } = changeInfo;
  const { url, title } = tab;

  if (status === "complete" && url && url.startsWith("http")) {
    initStore();
    store.update(STORE_KEY, history => {
      history.sites = [...history.sites, siteGenerator(url, title)];
    });
    console.log("HISTORY: ", store.get(STORE_KEY));
  }
});
