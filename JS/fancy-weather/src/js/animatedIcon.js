const Skycons = require('../../node_modules/skycons/skycons')(window);

export const setIcon = (id, img) => {
    var skycons = new Skycons({"color": 'white'});
    skycons.set(document.getElementById(id), img);
    skycons.play();
}