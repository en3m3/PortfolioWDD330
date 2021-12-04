class Movie {
    constructor(options) {
        this.id = options.id;
        this.title = options.title;
        this.file = options.file;
        this.imageSize = options.imageSize;
        this.images_uri =  "https://image.tmdb.org/t/p/"+ this.imageSize + "/" + this.file;
        this.release = options.release_date;
    }

    getDetails(options) {

    }


}