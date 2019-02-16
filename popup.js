// // Inject the payload.js script into the current tab after the popout has loaded
 document.addEventListener('DOMContentLoaded', function (evt) 
 {
document.getElementById('pagetitle').innerHTML = localStorage["status"];
});

	// {url: [{urlMatches : 'https://www.spotify.com/[a-z|-]*/account/subscription/'}]});
//
// // Listen to messages from the payload.js script and write to popout.html
// chrome.runtime.onMessage.addListener(function (message) {
//   const x = message.search("a");
//   const y = message.substring(x, x+30);
// 	document.getElementById('pagetitle').innerHTML = y;
// });

//var x = "jffj";
//alert(x);
//console.log("yash");
//console.log(document.getElementById('fb-root').innerHTML);// = localStorage["status"];
//console.log(localStorage["status"]);
//alert(localStorage["status"]);