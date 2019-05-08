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

    for (var i = 0; i < resp.items.length; i++) {
        $('#imageWrapper').append('<img src="' + resp.items[i].media.m + '"></img>');
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
