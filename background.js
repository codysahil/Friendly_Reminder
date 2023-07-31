chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      // Add your new conditions to check if the URL matches any of the desired sites.
      // For example, if you want to target "example.com" and "example.org":
      if (
        (tab.url.includes("https://practice.geeksforgeeks.org/explore?page=2&category[]=Recursion&difficulty[]=0&sortBy=submissions") || tab.url.includes("https://www.instagram.com/")  || tab.url.includes("https://twitter.com/home")  || tab.url.includes("https://in.pinterest.com/"))
      ) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["contentScript.js"]
        });
      }
      // Add more conditions if you have other sites you want to target.
      // else if (tab.url.includes("example.site")) {
      //   chrome.scripting.executeScript({
      //     target: { tabId: tabId },
      //     files: ["contentScript.js"]
      //   });
      // }
    }
  });
  