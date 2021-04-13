import  { renderForecast } from './renderForecast';
import { updateTime} from './updateTime';
import { renderFutureForecast } from './renderFutureForecast';
import { SearchPictureHelper } from './backgroundPic';

let interval = null;

export const searchWeather = async (location, lang) => {
    const myWeatherApi = '1b56c1ed6898b38723daf6cf3031b657';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.darksky.net/forecast/${myWeatherApi}/${location}?lang=${lang}`;
    const weather = await fetch(proxyUrl + url);
    const myJson = await weather.json();
    const timezone = myJson.timezone;

    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => updateTime(timezone, lang), 1000);
    
    const { currently } = myJson;
    renderForecast(currently, lang);

    SearchPictureHelper.getPicture(myJson, lang);
 
    const { daily } = myJson;
    renderFutureForecast(daily.data, lang);
 };