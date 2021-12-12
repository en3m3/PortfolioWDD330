var comicApiKey="d27523b3614f0cc9b22bba681e0668bf";
var comicApiSKey="a2896b7a9e0220cd07a460572b823758143d42c7";
let ts = new Date().getTime();
var hash= md5(`${ts}${comicApiSKey}${comicApiKey}`);