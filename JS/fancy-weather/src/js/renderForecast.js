import  { temperatureLocal, forecast, feelTemperature, wind, humidity } from './dom';
import { transferTemp } from './temptransfer';
import { weatherConditions} from './data';
import { setIcon } from './animatedIcon';

export const renderForecast = (weather, lang) => {
    temperatureLocal.innerHTML = `${transferTemp(weather.temperature)}°`;

    setIcon('day0', weather.icon);
    
    forecast.innerHTML = weather.summary;
    for (let i = 0; i < weatherConditions.length; i++) {
      if (weatherConditions[i][4] === lang) {
        feelTemperature.innerHTML = `${weatherConditions[i][0]}: ${transferTemp(weather.apparentTemperature)}°`;
        wind.innerHTML = `${weatherConditions[i][1]}: ${weather.windSpeed} ${weatherConditions[i][2]}`; 
        humidity.innerHTML = `${weatherConditions[i][3]}: ${weather.humidity} %`;
      }
    }
  }