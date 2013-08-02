function pageRefresh() {
    logEvent("Page refreshed");
}

function logEvent(message) {
    var logEl = document.createElement("div");
    logEl.className = "alert";
    logEl.innerHTML = message;
    var logContainer = document.getElementById("log");
    logContainer.appendChild(logEl);
    setTimeout(function() {
        logContainer.removeChild(logEl);
    }, 2500);
}

function doIframeUpload(){
    var response = jQuery("iframe").contents().text();
    if(response){
        logEvent("Image uploaded: " + response);
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', response);
        document.getElementById("result").appendChild(imgEl);
    }
}
