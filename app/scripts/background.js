chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  const { status } = changeInfo;
  const { url } = tab;

  if (status === "complete" && url && url.startsWith("http")) console.log(url);
});

// browser.runtime.onInstalled.addListener((details) => {
//   console.log('previousVersion', details.previousVersion)
// })

// browser.browserAction.setBadgeText({
//   text: `'Allo`
// })

// console.log(`'Allo 'Allo! Event Page for Browser Action`)
