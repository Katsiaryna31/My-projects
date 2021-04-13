import { temperatureC, temperatureF} from './dom';

export const setUnitTemp = () => {
   const unitTemp = localStorage.getItem('unitTemp');
   if (unitTemp === 'C') {
       temperatureC.classList.add('temperature--active');
       temperatureF.classList.remove('temperature--active');
   } else if (unitTemp === 'F') {
       temperatureF.classList.add('temperature--active');
       temperatureC.classList.remove('temperature--active');
   }
}

export const transferTemp = (temp) => {
   const unitTemp = localStorage.getItem('unitTemp');
   if (unitTemp === 'C') {
      setUnitTemp();
      return  Math.round((temp - 32) * 5/9);
   } else if (unitTemp === 'F') {
      setUnitTemp();
      return temp;
   }
}

// Only for tests://

export const transferToCelsius = (temp) => {
   return  Math.round((temp - 32) * 5/9);
}