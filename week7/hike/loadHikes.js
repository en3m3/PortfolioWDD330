import Hikes from './hikes.js';
const hikeList = new Hikes('hikes');
window.addEventListener('load', () => {
  hikeList.showHikeList();
});

