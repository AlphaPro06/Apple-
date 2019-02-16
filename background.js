chrome.webNavigation.onCompleted.addListener(function() {
    alert("Spotify subscription");
}, {url: [{urlMatches : 'https://www.spotify.com/[a-z]*/account/subscription/'}]});