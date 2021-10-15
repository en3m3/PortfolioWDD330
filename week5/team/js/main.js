import {getURLParameters, buildList} from './util.js';
import {getHikeData, getSingleHikeByName} from '../model/data.js';

var parameters = getURLParameters();

var hikeData = getHikeData();
var buildHikeList = buildList(hikeData);

document.getElementById('hikeContent').innerHTML=buildHikeList; 