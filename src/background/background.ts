chrome.runtime.onInstalled.addListener(() => {

});

chrome.windows.onCreated.addListener(() => {

});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  
});

chrome.tabs.onRemoved.addListener((tabId) => {
  
});

chrome.runtime.onMessage.addListener(
  ({ type, data }, sender, sendResponse) => {
    (async () => {
      switch (type) {
          default:
        sendResponse("Unknown");
        break;
      }
    })();

    return true;
  }
);
