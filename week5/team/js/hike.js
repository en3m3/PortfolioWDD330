export class Hike {
    constructor(name, props) {
        this.src = props['']
        this.name = name || "";
        this.imgSrc = props['imgSrc'] || "";
        this.imgAlt = props['img'] || "";
        this.distance = props['distance'] || "";
        this.difficulty = props['difficulty'] || "";
        this.description = props['description'] || "";
        this.directions = props['directions'] || "";
    }
}
