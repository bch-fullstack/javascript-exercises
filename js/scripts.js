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
        var _sourceOfClickedImage = $(this).siblings('img')[0].getAttribute('src');
        // get all of the img siblings of the .favourite element that has been clicked
        // and get the src attribute of that sibling
        console.log(extractImageUnique(_sourceOfClickedImage));
    });
}

function extractImageUnique(url) {
    url = url.split('/'); // turns url into an array of elements, separated by backslash /
    return url[url.length-2] + '/' + url[url.length-1].replace('.jpg', '');
    // url[url.length-1] returns the last element of the array
    // url[url.length-2] returns the second last element of the array
    // url[url.length-1].replace('.jpg', '') returns the last element of the array without the .jpg suffix
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


