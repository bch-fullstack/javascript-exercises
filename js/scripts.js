var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

function handleResponse(resp) {
    console.log('The request has been completed'); 
    console.log(resp);

    if (resp.items.length === 0) {
        $('#imageWrapper').text('There is no image matching your search term');
        return;
    }

    renderContent(resp);
}

function renderContent(resp) {
    $('#flickrLink').text(resp.link);
    $('#flickrTitle').text(resp.title);
    $('#imageWrapper').html(''); // clear out previous search result

    for (var i = 0; i < resp.items.length; i++) {
        createImage(resp.items[i].media.m);
    }
}

function createImage(url) {
    $('#imageWrapper').append('<div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src="' + url + '"></img></div>');
}

function doAjaxCall(searchTerm) {
    var paramsForFlickr = {
        tags: searchTerm,
        tagmode: 'any',
        format: 'json'
    };

    $.getJSON( 
        flickrAPI, 
        paramsForFlickr,
        handleResponse
    );
}

$(document).ready(function(){
    $('#search').on('click', function(){
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        doAjaxCall(searchTerm);
    });

    $('#searchTerm').on('change', function(){
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        doAjaxCall(searchTerm);
    });
});


