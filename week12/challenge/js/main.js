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
            lazyLoad: 'ondemand',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
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
  const seachResults = document.getElementById("searchResults");
  seachResults.innerHTML = "";
  let characterResults = new Array();
  var cast = JSON.parse(data).cast;
  let castHTML = `<div class="actorCarousel">`;
  cast.forEach(actor => {
      let charactersPlayed = actor.character.split(" / ");
      castHTML += `<div class="carouselItem">
      <div data-character-name="${actor.character}"><img src="`;
      if(!actor.profile_path) {
          castHTML += `./img/no-image.jpg`;
      } else{
      castHTML += `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
      }
      castHTML += `" alt="${actor.character} - ${actor.original_name}" /></div>`;
      charactersPlayed.forEach(character => {
          castHTML += `<div data-character-name="${character}">${character}</div>`;
      });
      
      castHTML += `</div>`;
  });
  castHTML += `</div>`;

  document.getElementById("activeDetails").innerHTML = castHTML;   
  setTimeout(() => {
      $(".actorCarousel").slick({
          arrows: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          lazyLoad: 'ondemand',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
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
      [].forEach.call(document.getElementsByClassName("actorCarousel")[0].querySelectorAll("div[data-character-name]:not([data-character-name='']"), actor => {
          $(actor).on("click", function(e) { 
              seachResults.innerHTML ="";
              let character = e.currentTarget.dataset.characterName;
              let aliases = character.split(" / ");
              aliases.forEach(alias => {
                fetch(`//gateway.marvel.com/v1/public/characters?apikey=${comicApiKey}&nameStartsWith=${alias}`)
                .then(response => response.json())
                .then(response => checkResults(response.data.results,character))
                  .catch(e=>{
                    seachResults.innerHTML ="No Results Found In Comic Database...";
                  });      
              }); 
          });
          
      });
}


function checkResults(results, fullName) {
  const seachResults = document.getElementById("searchResults");
  let resultsHTML ="";
  results.forEach(characterResult => {
    resultsHTML += `<div data-character-id="${characterResult.id}">    
    <img src="${characterResult.thumbnail.path}.${characterResult.thumbnail.extension}" alt="${characterResult.name}" />
    <div class="characterName">${characterResult.name}</div>
    </div>`
  });
  seachResults.innerHTML += resultsHTML;  

  document.querySelectorAll("#searchResults>div:last-of-type").on("click", function(e) { 
      // console.log("clicked");
      // let characterId = e.currentTarget.dataset.characterId;
      //   seachResults.innerHTML ="";
      //   fetch(`//gateway.marvel.com/v1/public/characters/${characterId}?apikey=${comicApiKey}`)
      //   .then(response => response.json())
      //   .then(response => generateDetails(response.data.results))
      //     .catch(e=>{
      //       seachResults.innerHTML ="No Results Found In Comic Database...";
      //     });      
        });       
}

function generateDetails(characterData) {
  console.log(data);
}