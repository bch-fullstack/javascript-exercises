var createFlickrSearcher = {
    flickrAPI: null, // api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?
    flickrLinkEl: null,
    flickrTitle: null,
    imageWrapperEl: null,
    searchTermEl: null,
    searchButtonEl: null,
    renderContent: function (resp) {
        this.flickrLinkEl.text(resp.link);
        this.flickrTitle.text(resp.title);
        this.imageWrapperEl.html(''); // clear out previous search result

        for (var i = 0; i < resp.items.length; i++) {
            this.createImage(resp.items[i].media.m);
        }
    },
    createImage: function (url) {
        this.imageWrapperEl.append('<div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src="' + url + '"></img></div>');
    },
    handleResponse: function (resp) {
        console.log('The request has been completed');
        console.log(resp);

        if (resp.items.length === 0) {
            this.imageWrapperEl.text('There is no image matching your search term');
            return;
        }

        this.renderContent(resp);
    },
    doAjaxCall: function (searchTerm) {
        var paramsForFlickr = {
            tags: searchTerm,
            tagmode: 'any',
            format: 'json'
        };
    
        $.getJSON(
            this.flickrAPI,
            paramsForFlickr,
            this.handleResponse.bind(this)
        );
    },
    init: function (api, link, title, wrapper, searchTerm, searchButton) {
        var scope = this;

        this.flickrLinkEl = $(link);
        this.flickrTitle = $(title);
        this.imageWrapperEl = $(wrapper);
        this.searchTermEl = $(searchTerm);
        this.searchButtonEl = $(searchButton);
        this.flickrAPI = api;

        this.searchButtonEl.on('click', function () {
            var searchTerm = scope.searchTermEl.val();
            console.log(searchTerm);
            scope.doAjaxCall(searchTerm);
        });

        this.searchTermEl.on('change', function () {
            var searchTerm = scope.searchTermEl.val();
            console.log(searchTerm);
            scope.doAjaxCall(searchTerm);
        });

    }
};

$(document).ready(function(){
    var flickrSampleSearch = createFlickrSearcher.init('//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', '#flickrLink', '#flickrTitle', '#imageWrapper', '#searchTerm', '#search');
});
