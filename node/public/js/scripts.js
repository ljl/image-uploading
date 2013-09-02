function pageRefresh() {
    logEvent("Page refreshed");
}

function logEvent(message) {
    var logEl = document.createElement("pre");
    logEl.className = "alert";
    logEl.innerHTML = message;
    var logContainer = document.getElementById("log");
    logContainer.appendChild(logEl);
    setTimeout(function() {
        logContainer.removeChild(logEl);
    }, 10000);
}

function doIframeUpload(){
    var response = jQuery("iframe").contents().text();
    if(response){
        logEvent("Image uploaded: " + response);
        appendImage(response);
    }
}

function appendImage(imageUrl) {
    var imgEl = document.createElement('img');
    var resultContainer = document.getElementById("result");
    imgEl.setAttribute('src', imageUrl);
    resultContainer.insertBefore(imgEl, resultContainer.firstChild);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
