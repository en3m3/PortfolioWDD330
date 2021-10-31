const hikeList = [
  {
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short (or long) hike through Teton Canyon.',
    directions:
      'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
  },
  {
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '7 miles',
    difficulty: 'Moderate',
    description:
      'Beautiful hike through Bechler meadows river to Denanda Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
  }
];

const imgPath = '//byui-cit.github.io/cit261/examples/';
export default class Hikes {
  constructor(containerId) {
    this.parentElement = document.getElementById(containerId);
    this.backBtn = this.buildBackBtn();
  }

  getAllHikes() {
    return hikeList;
  }

  getHikeByName(singleHikeName) {
    return this.getAllHikes().find(hike => hike.name === singleHikeName);
  }

  showHikeList() {
    this.parentElement.innerHTML = '';
    renderHikeList(this.parentElement, this.getAllHikes());
    this.hikeListener();
    this.backbtn.classList.add('hidden');
  }

  showOneHike(hikeName) {
    const hike = this.getHikeByName(hikeName);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(singleViewFull(hike));
    //shows the back button because it is a single hike
    this.backbtn.classList.remove('hidden');
  }

  hikeListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        // currentTarget refers to the target for the event, target would target the target of the function
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
  
  buildBackBtn() {
    const backbtn = document.createElement('button');
    backbtn.innerHTML = '&lt;&lt; All Hikes';
    backbtn.addEventListener('touchend', () => {
      this.showHikeList();
    });
    backbtn.classList.add('hidden');
    this.parentElement.before(backbtn);
    return backbtn;
  }
}

function renderHikeList(parent, hikes) {
  hikes.forEach(hike => {
    parent.appendChild(singleHikeView(hike));
  });
}
function singleHikeView(hike) {
  const singleHike = document.createElement('li');
  singleHike.classList.add('hike-item');
  singleHike.setAttribute('data-name', hike.name);
  singleHike.innerHTML = ` 
  <h2>${hike.name}</h2>
  <div class="image"><img src="${imgPath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`;
  return singleHike;
}

function singleViewFull(hike) {
  const singleHike = document.createElement('li');
  singleHike.innerHTML = `
        <img src="${imgPath}${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2>${hike.name}</h2>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
        </div>
        <div>
            <h3>How to get there</h3>
            <p>${hike.directions}</p>
        </div>`;
  return singleHike;
}
