chrome.webNavigation.onCompleted.addListener(function() {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'payload.js'});
}, {url: [{urlMatches : 'https://www.spotify.com/[a-z|-]*/account/subscription/'}]});

chrome.runtime.onMessage.addListener(function (message) {
  //const pattern = 'subscription-status[^\.]*\.';
  //const y = message.match(pattern);
  const x = message.search("recurring-date");
  if(x==null)
  {
  	localStorage["status"]="free";
  }
  //const sub = message.s
  const sub = message.substring(x+16, x + 30);
  const num = sub.search("</b>");
  const result = sub.substring(0,num);
  localStorage["status"] = result; 
  //alert(localStorage["status"]);

  //alert(x);
});
