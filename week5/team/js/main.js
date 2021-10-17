import {getURLParameters, buildList, singleHikeView} from './util.js';
import hikeList from '../model/hikes.js';

var parameters = getURLParameters();

if(parameters['action']) {
    var buildHikeList =  singleHikeView(parameters['action'], hikeList);
    console.log('buildHikeList '+ buildHikeList);
    if(!buildHikeList) {
        var buildHikeList = buildList(hikeList);
    }
} else {
    var buildHikeList = buildList(hikeList);
}
document.getElementById('hikeContent').innerHTML=buildHikeList; 