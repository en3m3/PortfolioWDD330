import QuakesController from './quakeController.js';
import * as util from './utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
var quakes = new QuakesController('#quakeList');
quakes.init();
console.log(quakes);