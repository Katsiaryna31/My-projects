import { weatherDate } from './dom';
import { beDate } from './data';

export const updateTime = (timezone, lang) => {
    const options = { timeZone: `${timezone}`, weekday: 'short', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' };
    const date = new Date().toLocaleString(lang, options);
    if (lang === "be") {
        const array = date.split(' ');
        for (let i = 0; i < beDate[0].length; i++) {
            if (beDate[0][i] === array[0]) {
                array.splice(0, 1, beDate[1][i]);
            }
        }
        for (let j = 0; j < beDate[2].length; j++) {
            if (beDate[2][j] === array[2]) {
                array.splice(2, 1, beDate[3][j]);
            }
        }
        const newdate = array.join(' ');
        weatherDate.innerHTML = newdate;
    } else {
        weatherDate.innerHTML = date;
    }
};