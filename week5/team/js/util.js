function getURLParameters() {
    var params = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        params[key] = value;
    });
    return params;
}

function buildList(hikeData) {
    let htmlList = "<ul>";
    hikeData.forEach(hike => {
        htmlList += "<li>";
        htmlList += `Distance: ${hike.distance}`;
        htmlList += `Difficulty: ${hike.difficulty}`;
        htmlList += `<h2>${hike.name}</h2>`;

        htmlList += "</li>";
    });
    return htmlList;
}

export {getURLParameters, buildList};