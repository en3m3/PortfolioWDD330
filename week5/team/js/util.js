function getURLParameters() {
    var params = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        params[key] = value;
    });
    return params;
}


function buildList(hikeData) {
    let imgPath = "//byui-cit.github.io/cit261/examples/";
    let htmlList = "<div class='hike-menu'>"
    htmlList += `<a href="?action=">Home</a>`;
    hikeData.forEach(hike => {
        let action = hike.name.replace(/\s+/g, '');
        htmlList += `<a href="?action=${action}">${hike.name}</a>`;
    });
    htmlList += "</div>";
    htmlList += "<ul class='all-hikes'>";
    hikeData.forEach(hike => {
        htmlList += "<li>";
        htmlList += `<h2>${hike.name}</h2>`;
        htmlList += `<img src="${imgPath}${hike['imgSrc']}" alt="${hike['imgAlt']}" >`;
        htmlList += `<p><strong>Distance:</strong> ${hike['distance']}</p>`; 
        htmlList += `<p><strong>Difficulty:</strong> ${hike['difficulty']}</p>`;   
        htmlList += "</li>";
    });
    return htmlList;
}

function singleHikeView(action, hikeData){
    let imgPath = "//byui-cit.github.io/cit261/examples/";
    let htmlList = "<div class='hike-menu'>"
    htmlList += `<a href="?action=">Home</a>`;
    hikeData.forEach(hike => {
        let action = hike.name.replace(/\s+/g, '');
        htmlList += `<a href="?action=${action}">${hike.name}</a>`;
    });
    htmlList += "</div>";
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

export {getURLParameters, buildList, singleHikeView};