export class pokedex {
    constructor(container)  {
        this.fetchURL = "https://pokeapi.co/api/v2/pokemon/";
        this.container = container;
        this.totalPokemon = null;
        this.currentPage = "";
        this.nextUrl = "";
        this.prevUrl = "";
        this.listHTML = "";

        this.requestPage(this.fetchURL);


    }
    
    _requestFailed() {
        console.log("Your API request failed");
    }

    _fetchData(fetchURL) {
        let response = fetch(fetchURL,{mode:'cors',headers:{'Access-Control-Allow-Origin':'*'}})
        .then(response => 
            this.currentPage = response.json())
        .then(
            this._generateListHTML(this.currentPage))
        .catch(e => console.log(e));   
    }

    requestPage(url) {
        var page = {};
        this._fetchData(url);
    }

    _generateListHTML(page) {
        let pageHTML ="<ul>";
        let data = page.then(result => {
            if(!this.totalPokemon) {this.totalPokemon = result.count;}
            console.log(result.results);
            Object.entries(result.results).forEach(pokemon => {
                pageHTML += `
                <li>
                    <a href="index.html?pokemon=${pokemon[1].name}&url=${pokemon[1].url}">${pokemon[1].name}</a>
                </li>`
            });
            pageHTML +="</ul>";
            return pageHTML;
            
            
        }).catch(err => console.err);
    }

    displaySinglePokemon(apiURL) {

    }
}

export class Pokemon {
    constructor(props) {
        this.id = props.id || "";
        this.name = props.name || "";
    }




}