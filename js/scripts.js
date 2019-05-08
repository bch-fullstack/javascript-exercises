var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

var paramsForFlickr = {
    tags: 'pasila',
    tagmode: 'any',
    format: 'json'
};

function handleResponse(resp) {
    console.log('The request has been completed'); 
    console.log(resp);
    renderContent(resp);
}

function renderContent(resp) {
    $('#flickrLink').text(resp.link);
    $('#flickrTitle').text(resp.title);
    
    var imageItems = resp.items,
        index = resp.items.length;

    for (var i = 0; i < resp.items.length; i++) {
        $('#imageWrapper').append('<div>' + resp.items[i].link + '</div>');
    }

}

function doAjaxCall() {
    $.getJSON( 
        flickrAPI, 
        paramsForFlickr,
        handleResponse
    );
}

doAjaxCall();
