function getURLParameters() {
    var params = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        params[key] = value;
    });
    return params;
}

function createMenu(hikeData) {
    let htmlMenu = "<div class='hike-menu'>"
    htmlMenu += `<a href="?action=">Home</a>`;
    hikeData.forEach(hike => {
        let action = hike.name.replace(/\s+/g, '');
        htmlMenu += `<a href="?action=${action}">${hike.name}</a>`;
    });
    htmlMenu += "</div>";
    return htmlMenu    
}

function buildList(hikeData) {
    let imgPath = "//byui-cit.github.io/cit261/examples/";
    let htmlList = "<ul class='all-hikes'>";
    hikeData.forEach(hike => {
        let action = hike.name.replace(/\s+/g, '');
        htmlList += "<li>";
        htmlList += `<h2>${hike.name}</h2>`;
        htmlList += `<a href="?action=${action}"><img src="${imgPath}${hike['imgSrc']}" alt="${hike['imgAlt']}" ></a>`;
        htmlList += `<p><strong>Distance:</strong> ${hike['distance']}</p>`; 
        htmlList += `<p><strong>Difficulty:</strong> ${hike['difficulty']}</p>`;   
        htmlList += "</li>";
    });
    return htmlList;
}

function singleHikeView(action, hikeData){
    let imgPath = "//byui-cit.github.io/cit261/examples/";
    let htmlList="";
    hikeData.forEach(hike => {
        let hikeName = hike['name'].replace(/\s+/g, '');
        if(action === hikeName) {
            htmlList += `<div class="single-hike">`;
            htmlList += `<div class="hike-image">`;
            htmlList += `<img src="${imgPath}${hike['imgSrc']}" alt="${hike['imgAlt']}" class="single-hike-img">`;
            htmlList += `</div>`;
            htmlList += `<div class="hike-details">`;
            htmlList += `<h1>${hike.name}</h1>`;
            htmlList += `<p><strong>Distance:</strong> ${hike['distance']}</p>`; 
            htmlList += `<p><strong>Difficulty:</strong> ${hike['difficulty']}</p>`;
            htmlList += `<p><strong>Directions:</strong> ${hike['directions']}</p>`;
            htmlList += `</div>`;      
            htmlList += `</div">`;        
        }
        
    });
    if(htmlList === ""){
        return false;
    } else{
        return htmlList;
    }
    
}

export {getURLParameters, buildList, singleHikeView, createMenu};