import Circle from '../images/update.svg';
import Microphone from '../images/microphone.svg';

export const container = document.createElement('main');
container.className = 'container';
document.body.append(container);

export const buttons = document.createElement('section');
buttons.className = 'buttons';
container.append(buttons);

export const buttonsMain = document.createElement('div');
buttonsMain.className = 'buttons__main';
buttons.append(buttonsMain);

export const buttonsUpdate = document.createElement('button');
buttonsUpdate.className = 'buttons__update';
const updateImage = document.createElement('img');
updateImage.src = Circle;
updateImage.alt = 'Update';
buttonsUpdate.append(updateImage);
buttonsMain.append(buttonsUpdate);

export const language = document.createElement('div');
language.className = 'language';
buttonsMain.append(language);

export const languageList = document.createElement('ul');
languageList.className = 'language__list';
language.append(languageList);

export const languageItem = document.createElement('li');
languageItem.className = 'language__item';
languageList.append(languageItem);
export const languageItemRus = languageItem.cloneNode(true);
export const languageItemBel = languageItem.cloneNode(true);

export const languageEng = document.createElement('button');
languageEng.className = 'language__english';
languageEng.innerHTML = 'EN';
languageItem.append(languageEng);
languageEng.classList.add('language--active');

export const languageRus = document.createElement('button');
languageRus.className = 'language__russian';
languageRus.innerHTML = 'RU';

languageItemRus.append(languageRus);
languageList.append(languageItemRus);

export const languageBel = document.createElement('button');
languageBel.className = 'language__belorussian';
languageBel.innerHTML = 'BY';

languageItemBel.append(languageBel);
languageList.append(languageItemBel);

export const temperature = document.createElement('div');
temperature.className = 'temperature';
buttonsMain.append(temperature);

export const temperatureF = document.createElement('button');
temperatureF.className = 'temperature__fahrenheit';
temperatureF.innerHTML = 'F°'; 
temperature.append(temperatureF);

export const temperatureC = document.createElement('button');
temperatureC.className = 'temperature__celsius';
temperatureC.innerHTML = 'C°';
temperature.append(temperatureC);

export const buttonsMap = document.createElement('div');
buttonsMap.className = 'buttons__map';
buttons.append(buttonsMap);

export const mapSearch = document.createElement('div');
mapSearch.className = 'buttons__map--search';
buttonsMap.append(mapSearch);

export const mapInput = document.createElement('input');
mapInput.className = 'buttons__map--input';
mapInput.setAttribute('type', 'search');
mapInput.setAttribute('placeholder', 'Seach city or ZIP');
mapInput.setAttribute('contenteditable', 'true');
buttonsMap.append(mapInput);

export const mapButton = document.createElement('button');
mapButton.className = 'buttons__map--button';
mapButton.innerHTML = 'Search';
buttonsMap.append(mapButton);

export const speechButton = document.createElement('button');
speechButton.className = 'buttons__speech--button';
const speechImage = document.createElement('img');
speechImage.src = Microphone;
speechImage.alt = 'Speech';
speechButton.append(speechImage);
buttonsMap.append(speechButton);

export const mapLocation = document.createElement('div');
mapLocation.className = 'weather__location';
container.append(mapLocation);

export const locationCity = document.createElement('div');
locationCity.className = 'map__location-current';
mapLocation.append(locationCity);

export const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
container.append(wrapper);

export const weather = document.createElement('div');
weather.className = 'weather';
wrapper.append(weather);

export const weatherDate = document.createElement('div');
weatherDate.className = 'weather__date';
weather.append(weatherDate);

export const weatherTime = document.createElement('span');
weatherTime.className = 'weather__time';
weatherDate.append(weatherTime);


export const weatherToday = document.createElement('div');
weatherToday.className = 'weather__today';
weather.append(weatherToday);

export const temperatureLocal = document.createElement('div');
temperatureLocal.className = 'weather__today-temperature';
weatherToday.append(temperatureLocal);

//export const icon = document.createElement('i');
//weatherToday.append(icon);

export const icon = document.createElement('canvas');
icon.className = 'weather__today-icon';
icon.setAttribute("width","128");
icon.setAttribute("height","128");
icon.setAttribute("id","day0");
weatherToday.append(icon);

export const weatherData = document.createElement('div');
weatherData.className = 'weather__today-data';
weatherToday.append(weatherData);

export const forecast = document.createElement('div');
forecast.className = 'weather__today-forecast';
weatherData.append(forecast);

export const feelTemperature = document.createElement('div');
feelTemperature.className = 'weather__today-feelTemperature';
weatherData.append(feelTemperature);

export const wind = document.createElement('div');
wind.className = 'weather__today-wind';
weatherData.append(wind); 

export const humidity = document.createElement('div');
humidity.className = 'weather__today-humidity'; 
weatherData.append(humidity);  

export const weatherFuture = document.createElement('div');
weatherFuture.className = 'weather__future';
weather.append(weatherFuture);

export const map = document.createElement('div');
map.className = 'map';
wrapper.append(map);

export const mapImage = document.createElement('div');
mapImage.className = 'map__image';
mapImage.setAttribute("id","map");
map.append(mapImage);

export const mapCoordinates = document.createElement('div');
mapCoordinates.className = 'map__coordinates';
map.append(mapCoordinates);

export const mapLatitude = document.createElement('div');
mapLatitude.className = 'map__coordinates--latitude';
mapCoordinates.append(mapLatitude);

export const mapLongitude = document.createElement('div');
mapLongitude.className = 'map__coordinates--longitude';
mapCoordinates.append(mapLongitude);