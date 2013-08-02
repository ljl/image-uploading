iframeUpload = function(){};
iframeUpload.init = function() {
    jQuery('body').append('<iframe name="uploadiframe" onload="iframeUpload.complete();"></iframe>');
    jQuery('form').prop('target','uploadiframe');
    jQuery('form').on('submit',iframeUpload.started);
}
iframeUpload.started = function() {
    jQuery('#response').removeClass().addClass('loading').html('Loading, please wait.').show();
    jQuery('form').hide();
}
iframeUpload.complete = function(){
    jQuery('form').show();
    var response = jQuery("iframe").contents().text();
    if(response){
        response = jQuery.parseJSON(response);
        jQuery('#response').removeClass()
            .addClass((response.status == 1) ? 'success' : 'error')
            .html(response.message);
    }
}