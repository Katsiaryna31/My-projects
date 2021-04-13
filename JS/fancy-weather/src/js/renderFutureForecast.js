import  { weatherFuture } from './dom';
import { transferTemp } from './temptransfer';
import { weekDays } from './data';
import { setIcon } from './animatedIcon';

export const renderFutureForecast = (weatherArray, lang) => {
    const blocksList = document.querySelectorAll('.weather__future--day');
    blocksList.forEach((element) => {
        element.parentNode.removeChild(element);
    });
    for (let i = 1; i <= 3; i++) {
        const weatherBlock = document.createElement('div');
        weatherBlock.className = `weather__future--day`;
        weatherFuture.append(weatherBlock);

        const weekDay = document.createElement('div');
        weekDay.className = 'weather__future-weekday';
        const formattedTime = new Date(weatherArray[i].time * 1000).getDay();
        for (let i = 0; i < weekDays.length; i++) {
            if (weekDays[i][7] === lang) {
                weekDay.innerHTML = weekDays[i][formattedTime]; 
            }
        }
        weatherBlock.append(weekDay);

        const temperature = document.createElement('div');
        temperature.className = 'weather__future-temperature';
        temperature.innerHTML = `${Math.round((transferTemp(weatherArray[i].temperatureMin) + transferTemp(weatherArray[i].temperatureMax)) / 2)}°`; 
        weatherBlock.append(temperature);

        const icon = document.createElement('canvas');
        icon.className = 'weather__future-icon';
        icon.setAttribute("width","80");
        icon.setAttribute("height","80");
        icon.setAttribute("id", `day${i}`);
        weatherBlock.append(icon);
        setIcon(`day${i}`, weatherArray[i].icon);

        const forecast = document.createElement('div');
        forecast.className = 'weather__future-forecast';
        forecast.innerHTML = weatherArray[i].summary;
        weatherBlock.append(forecast); 
    }
  }