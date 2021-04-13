import { container } from './dom';

export class SearchPictureHelper {
    static getSeason(currentTime) {
        const currentMonth = new Date (currentTime).getMonth();
        if (currentMonth >= 2 && currentMonth <= 4) {
            return "spring";
        } else if (currentMonth >= 5 && currentMonth <= 7) {
            return "summer";
        } else if (currentMonth >= 8 && currentMonth <= 10) {
            return "autumn";
        } else if (currentMonth < 2 || currentMonth === 11) {
            return "winter";
        }
    }

    static getDayTime (currentTime) {
        const currentHour = new Date (currentTime).getHours();
        if (currentHour >= 6 && currentHour <= 9) {
            return "morning";
        } else if (currentHour >= 10 && currentHour <= 18) {
            return "day";
        } else if (currentHour >= 19 && currentHour <= 22) {
            return "evening";
        } else if (currentHour < 6 || currentHour > 22) {
            return "night";
        }
    }

    static async getPicture (info, lang) {
        const latitude = info.latitude;
        const longitude = info.longitude;
        const currentWeather = info.currently.icon;
        const currentTime = new Date().toLocaleString("en", { timeZone: `${info.timezone}`}); 

        const myPicApi = '58d373ac403b7271be70d54b67dd2ff8';
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myPicApi}&tags=${this.getSeason(currentTime)}%2C+${currentWeather}%2C+${this.getDayTime(currentTime)}&tag_mode=any&geo_context=2&bbox=${longitude-1}%2C${latitude-1}%2C${longitude+1}%2C${latitude+1}&format=json&nojsoncallback=1`;
        const pictures = await fetch(url);
        const myJson = await pictures.json();
        const { photos } = myJson;  
        const { photo } = photos;
        if (photo.length === 0) {
            if (lang === 'ru') {
                alert  ('Фото не найдено');
            } else if (lang === 'en') {
                alert  ('No photo found');
            } else if (lang === 'be') {
                alert  ('Фота не знойдзена');
            }
            return;
        }
        const randomPhoto = photo[Math.floor(Math.random() * (photo.length-1))];
        const imageUrl = `https://farm${randomPhoto.farm}.staticflickr.com/${randomPhoto.server}/${randomPhoto.id}_${randomPhoto.secret}_b.jpg`;
        container.style.background = `no-repeat url(${imageUrl})`;
        container.style.backgroundSize = 'cover';
    }    
 };

 