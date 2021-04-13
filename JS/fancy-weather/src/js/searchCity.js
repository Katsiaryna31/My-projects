import { locationCity, mapLatitude, mapLongitude } from './dom';
import { searchWeather } from './searchWeather';
import { createMap } from './mapimage';
import { coordinatesLang } from './data';

const minutesNumber = 60;

export async function searchLocation (searchPlace) {
    const lang = localStorage.getItem('lang');
    if (!searchPlace) {
        if (lang === 'ru') {
            alert  ('Ошибка ввода!');
        } else if (lang === 'en') {
            alert  ('Error input!');
        } else if (lang === 'be') {
            alert  ('Памылка ўводу!');
        }
        return;
    }
    const mySearchKey = '2dd27939c6cb477fb8c60fee9afb9226';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchPlace}&key=${mySearchKey}&pretty=1&no_annotations=1&language=${lang}`;
    const response = await fetch(url)
    const myJson = await response.json(); 
    const { results } = myJson;
    if (results.length === 0) {
        if (lang === 'ru') {
            alert  ('Проверьте правильность ввода!');
        } else if (lang === 'en') {
            alert  ('Check that the input is correct!');
        } else if (lang === 'be') {
            alert  ('Праверце правільнасць уводу!');
        }
        return;
    }
    const city = results[0].components.city || results[0].components.town || results[0].components.hamlet || results[0].components.county || results[0].components.state;
    const country = results[0].components.country;
    const coordinates = results[0].geometry;
    
    const latitude = coordinates.lat;
    const latitudeDegrees = Math.floor(latitude);
    let latitudeMinutes = Math.round((latitude - latitudeDegrees) * minutesNumber);
    if (latitudeMinutes < 10) {
        latitudeMinutes = `0${latitudeMinutes}`;
    }
    
    const longitude = coordinates.lng;
    const longitudeDegrees = Math.floor(longitude);
    let longitudeMinutes = Math.round((longitude - longitudeDegrees) * minutesNumber);
    if (longitudeMinutes < 10) {
        longitudeMinutes = `0${longitudeMinutes}`;
    }

    const location = `${latitude}, ${longitude}`;
    
    locationCity.innerHTML = `${city}, ${country}`;
    for (let i = 0; i < coordinatesLang.length; i++) {
        if (coordinatesLang[i][2] === lang) {
            mapLatitude.innerHTML = `${coordinatesLang[i][0]}: ${latitudeDegrees}° ${latitudeMinutes}'`;
            mapLongitude.innerHTML = `${coordinatesLang[i][1]}: ${longitudeDegrees}° ${longitudeMinutes}'`;
        }
    }
    searchWeather(location, lang);
    createMap(longitude, latitude);
};

// Only for tests://

export const searchByCity = (city) => {
    if (!city) {
        throw new Error('Empty input');
    } else {
        searchLocation (city);
    }
}



