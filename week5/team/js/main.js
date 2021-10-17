import {getURLParameters, buildList, singleHikeView, createMenu} from './util.js';
import hikeList from '../model/hikes.js';

var parameters = getURLParameters();

if(parameters['action']) {
    var buildHikeList =  singleHikeView(parameters['action'], hikeList);
    if(!buildHikeList) {
        var buildHikeList = buildList(hikeList);
    }
} else {
    var buildHikeList = buildList(hikeList);
}

var menu = createMenu(hikeList);

document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById('page-nav').innerHTML=menu; 
    document.getElementById('hikeContent').innerHTML=buildHikeList; 
});
