var pages = new Array();

window.addEventListener('load', function () {

    var page = 1;
    theMovieDb.keywords.getMovies({"id": 180547}, getData, errorCB);
    // theMovieDb.getMovies({"id": 180547}, getData, errorCB);
    // theMovieDb.movies.getCredits({"id": 283995}, displayMovieData, errorCB);
  });

function getData(data) {
    var totalPages = JSON.parse(data).total_pages;
    for(let i = 1; i <= totalPages; i++) {
        theMovieDb.keywords.getMovies({"id": 180547,"page": i}, parseMovieData, errorCB);
    }
}

function parseMovieData(data){
    var movieObj = JSON.parse(data);
    pages.push(movieObj);
    if(movieObj.page == movieObj.total_pages) {
        createMovieArray();
    }
    
}

function errorCB(){
    return false;
}

function imdbdetail(data) {
    console.log(JSON.parse(data));
}

function createMovieArray() {
    var movies = new Array();
    pages.forEach(page => {
        page.results.forEach(movie => {
            let newMovie = new Movie({
                "id": movie.id,
                "title":  movie.title,
                "file": movie.poster_path,
                "imageSize": "w500",
                "release_date": movie.release_date
            });
            movies.push(newMovie);
        });
    });
    console.log(movies);
    let carousel = buildMovieCarosel(movies);
}

function buildMovieCarosel(movies) {
    var movieCarouselHTML = "";
    movieCarouselHTML += `<div class="marvelCarousel">`;
    movies.forEach(movie =>{
        if(!movie.file) {
            movieCarouselHTML += `
            <div class="carouselItem">
                <img src="./img/no-image.jpg" data-id="${movie.id}" />
            </div>
        `;
        } else {
        movieCarouselHTML += `
            <div class="carouselItem">
                <img src="${movie.images_uri}" data-id="${movie.id}" />
            </div>
        `;
        }
    });
        
    movieCarouselHTML += `</div>`;
    // console.log(movieCarouselHTML);
    document.getElementById("movieCarousel").innerHTML = movieCarouselHTML;
        $(".marvelCarousel").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '10px',
            lazyLoad: 'ondemand',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }

            ]
          });
      let currentMovieId = document.getElementsByClassName("marvelCarousel")[0].getElementsByClassName("slick-active")[0].getElementsByTagName("img")[0].dataset.id;     
      getCastData(currentMovieId);
      $('.marvelCarousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
        currentMovieId = document.getElementsByClassName("marvelCarousel")[0].getElementsByClassName("slick-active")[0].getElementsByTagName("img")[0].dataset.id;     
        getCastData(currentMovieId);     
      }); 
}

function getCastData(id) {
    theMovieDb.movies.getCredits({"id": id}, buildCastData, errorCB);

} 

function buildCastData(data) {
    console.log(data); 
    var cast = JSON.parse(data).cast;
    let castHTML = `<div class="actorCarousel">`;
    cast.forEach(actor => {
        castHTML += `<div class="carouselItem" data-character-name="${actor.character}">
        <img src="`;
        if(!actor.profile_path) {
            castHTML += `./img/no-image.jpg`;
        } else{
        castHTML += `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
        }
        castHTML += `" alt="${actor.character} - ${actor.original_name}" />
        <p>${actor.character}<br/>${actor.original_name}</p>
        </div>`;
    });
    castHTML += `</div>`;
    console.log(castHTML);

    document.getElementById("activeDetails").innerHTML = castHTML;   
    setTimeout(() => {
        $(".actorCarousel").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '20px',
            lazyLoad: 'ondemand',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }

            ]
          });
        }, 500);     
        [].forEach.call(document.getElementsByClassName("actorCarousel")[0].getElementsByClassName("carouselItem"), actor => {
            $(actor).on("click", function(e) { 
                let character = e.currentTarget.dataset.characterName;
                fetch(`https://developer.marvel.com/v1/public/characters/${character}`)
                .then(response => response.json())
                .then(data => console.log(data));
            });
            
        });
}