//Wire up event event handlers
document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("getResults");
    resultsButton.onclick = getResults();
});

function getResults(){ alert('Hello World') }