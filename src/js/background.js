import "../img/icon-128.png";
import "../img/icon-34.png";

// TODO: Use chrome's history event instead.
chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  const { status } = changeInfo;
  const { url } = tab;

  if (status === "complete" && url && url.startsWith("http")) {
    console.log("CRYPTOPAL: ", url);
  }
});
