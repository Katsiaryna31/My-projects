import './js/updateTime';
import './js/data';
import { mapButton, mapInput, buttonsUpdate, languageEng, languageRus, languageBel, temperatureC, temperatureF, speechButton } from './js/dom';

import { setUnitTemp } from './js/temptransfer';

import './js/renderForecast';
import './js/renderFutureForecast';

import './js/searchWeather';
import './js/mapimage';

import { searchLocation } from './js/searchCity';
import { searchCurrentLocation } from './js/searchapi';
import { startRecognition } from './js/speechRecognition';


import './css/main.css';
import './scss/main.scss';

if (!localStorage.getItem('unitTemp')) {
    localStorage.setItem('unitTemp', 'C');
}

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
}

const setLanguage = () => {
    const lang = localStorage.getItem('lang');
    if (lang === 'en') {
        languageEng.classList.add('language--active');
        languageRus.classList.remove('language--active');
        languageBel.classList.remove('language--active');
        languageEng.innerHTML = 'EN';
        languageRus.innerHTML = 'RU';
        languageBel.innerHTML = 'BY';
        mapButton.innerHTML = 'Search';
        mapInput.placeholder = 'Seach city or ZIP';
    } else if (lang === 'ru') {
        languageRus.classList.add('language--active');
        languageEng.classList.remove('language--active');
        languageBel.classList.remove('language--active');
        languageEng.innerHTML = 'АНГ';
        languageRus.innerHTML = 'РУС';
        languageBel.innerHTML = 'БЕЛ';
        mapButton.innerHTML = 'Поиск';
        mapInput.placeholder = 'Поиск города или индекса';
    } else if (lang === 'be') {
        languageBel.classList.add('language--active');
        languageEng.classList.remove('language--active');
        languageRus.classList.remove('language--active');
        languageEng.innerHTML = 'АНГ';
        languageRus.innerHTML = 'РУС';
        languageBel.innerHTML = 'БЕЛ';
        mapButton.innerHTML = 'Пошук';
        mapInput.placeholder = 'Пошук горада ці індэкса';
    }
}

setLanguage();
setUnitTemp();
searchCurrentLocation(); 

mapButton.addEventListener('click', () => {
    const cityName = mapInput.value;
    searchLocation(cityName);
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        const cityName = mapInput.value;
        searchLocation(cityName);
    }
});
  

buttonsUpdate.addEventListener('click', () => {
    if (mapInput.value) {
        searchLocation(mapInput.value);
    } else {
        searchCurrentLocation();
    }
});

languageEng.addEventListener('click', () => {
    localStorage.setItem('lang', 'en');
    setLanguage();
    if (mapInput.value) {
        searchLocation(mapInput.value);
    } else {
        searchCurrentLocation();
    }
});

languageRus.addEventListener('click', () => {
    localStorage.setItem('lang', 'ru');
    setLanguage();
    if (mapInput.value) {
        searchLocation(mapInput.value);
    } else {
        searchCurrentLocation();
    }
});

languageBel.addEventListener('click', () => {
    localStorage.setItem('lang', 'be');
    setLanguage();
    if (mapInput.value) {
        searchLocation(mapInput.value);
    } else {
        searchCurrentLocation();
    }
});

temperatureC.addEventListener('click', () => {
    localStorage.setItem('unitTemp', 'C');
    if (mapInput.value) {
        searchLocation(mapInput.value);
    } else {
        searchCurrentLocation();
    }
});

temperatureF.addEventListener('click', () => {
    localStorage.setItem('unitTemp', 'F');
    if (mapInput.value) {
        searchLocation(mapInput.value);
    } else {
        searchCurrentLocation();
    }
});

speechButton.addEventListener('mousedown', () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.lang = localStorage.getItem('lang');

    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
    mapInput.value = transcript;
    
    })
    recognition.start();
});

speechButton.addEventListener('mouseup', () => {
    searchLocation(mapInput.value);
});

speechButton.addEventListener('touchstart', () => {
    startRecognition();
});

speechButton.addEventListener('touchend', () => {
    searchLocation(mapInput.value);
});



