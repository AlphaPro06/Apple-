chrome.webNavigation.onCompleted.addListener(function() {
    chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
      file: 'payload.js'});
  }, {url: [{urlMatches : 'https://www.netflix.com/BillingActivity'}]});
  chrome.runtime.onMessage.addListener(function (message) {
    //const pattern = 'subscription-status[^\.]*\.';
    //const y = message.match(pattern);
    const x = message.search("billingSummaryContents");
    if(x==null)
    {
        localStorage["status"]="free";
    }
    //const sub = message.s
    const sub = message.substring(x+16, x + 1100);
    //alert(sub);
    const num = sub.search("data-uia");
    const result = sub.substring(num + 14 ,num + 50 );
    //alert(result)
    const end_price = result.search("<em>");
    const price = result.substring(0, end_price);
    localStorage["netflixprc"] = price; 
    alert(price);
  
    //alert(x);
    const o = message.search("Next billing date");

    const subi = message.substring(o + 39, o + 51);
    alert(subi);
    //const num = sub.search("billingSummaryLabel billingSummarySpace");
    //const result = sub.substring(num + 12 ,num + 50 );
    //alert(num);
    //const end_price = result.search("<em>");
    //const price = result.substring(0, end_date);
    //localStorage["netflixprc"] = date; 
    //alert(date);
  
    //alert(x);
  });