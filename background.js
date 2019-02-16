chrome.webNavigation.onCompleted.addListener(function() {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'payload.js'});
}, {url: [{urlMatches : 'https://www.spotify.com/[a-z|-]*/account/subscription/'}]});

chrome.runtime.onMessage.addListener(function (message) {
  //const pattern = 'subscription-status[^\.]*\.';
  //const y = message.match(pattern);
  const x = message.search("recurrent-date");
  const y = message.substring(x, x + 150);
  localStorage["status"] = y; 
  //alert(localStorage["status"]);

  //alert(x);
});
