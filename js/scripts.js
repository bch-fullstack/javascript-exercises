var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

/**
 * Call the render function to render image content if there are result,
 * otherwise, discard and print out the notification that nothing is found
 * Call addFavouriteButtonEvent function once finished rendering images
 * 
 * @param   {Object}    resp contains the data that we retrieved from the AJAX call to to flickr
 * @return  {Boolean}   false if no image is found
 * @return  {Void}      if images get rendered
 */
function handleResponse(resp) {
    console.log('The request has been completed'); 
    console.log(resp);

    if (resp.items.length === 0) {
        $('#imageWrapper').text('There is no image matching your search term');
        return;
    }

    renderContent(resp);
    addFavouriteButtonEvent();
}

function addFavouriteButtonEvent() {
    $('.favourite').click(function(){
        console.log('Try to add to favourite');
    });
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
    $('#imageWrapper').append(`
        <div class="col-md-3 col-sm-4 col-xs-6">
            <img class="img-responsive" src="`
            + url +
            `"> 
            </img>
            <button class="favourite">Favourite</button>
    </div>
    `);
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


