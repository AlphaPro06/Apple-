// // Inject the payload.js script into the current tab after the popout has loaded
 document.addEventListener('DOMContentLoaded', function (evt) 
 {
	
 	//if (localStorage["spotifydat"] == null) {

	var tbinput;
	var tbinput2;

	tbinput = document.getElementById("tbinput");
	tbinput2 = document.getElementById("tbinput2");
	document.getElementById("btadd").addEventListener('click', addDate);
	document.getElementById("btadd2").addEventListener('click', addPrice);
	
	document.getElementById('dat').innerHTML = localStorage["spotifydat"];
	document.getElementById('prc').innerHTML = localStorage["spotifyprc"];

});

 	function addDate() {
	  localStorage["spotifydat"] = tbinput.value; // add textbox value to array
	  tbinput.value = ''; // clear textbox value
	};

	function addPrice() {
	  localStorage["spotifyprc"] = tbinput2.value; // add textbox value to array
	  tbinput2.value = ''; // clear textbox value
	};

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