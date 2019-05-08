var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

$.getJSON( flickrAPI, {
    tags: 'pasila',
    tagmode: 'any',
    format: 'json'
    },
    function(data){
        console.log(data);
    }
);