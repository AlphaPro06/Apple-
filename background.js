chrome.webNavigation.onCompleted.addListener(function() {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'payload.js'});
}, {url: [{urlMatches : 'https://www.spotify.com/[a-z|-]*/account/subscription/'}]});

chrome.runtime.onMessage.addListener(function (message) {
  //const pattern = 'subscription-status[^\.]*\.';
  //const y = message.match(pattern);
  const x = message.search("recurring-date");
  if( x == -1) {
  	localStorage["spotifydat"] = "free";
  } else {
	  //const sub = message.s
	  const sub = message.substring(x+16, x + 30);
	  const num = sub.search("</b>");
	  const result = sub.substring(0,num);
	  localStorage["spotifydat"] = result; 
	  //alert(localStorage["status"]);
	}

	//for price
	const temp = message.search("recurring-price");
  if(temp == -1) {
  	localStorage["spotifyprc"] = "free";
  } else {
	  const subi = message.substring(temp+17, temp+40);
	  const numi = subi.search("</b>");
	  alert(numi);
	  const resulti = subi.substring(0,numi);
	  //alert(resulti);
	  localStorage["spotifyprc"] = resulti; 
	  //alert(localStorage["status"]);
}


  

  //alert(x);
});
