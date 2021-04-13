import { transferToCelsius } from '../src/js/temptransfer';
import { searchCurrentLocation } from '../src/js/searchapi';
import { searchWeather } from '../src/js/searchWeather';
import { SearchPictureHelper } from '../src/js/backgroundPic';
import { searchByCity } from '../src/js/searchCity'

const fetch = require("node-fetch");

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn()
    })),
    NavigationControl: jest.fn()
}));

describe("transfer forengheit to celsius", () => {
    it("should transfer farengheit to celsius", () => {
        expect(searchCurrentLocation).toBeDefined();
    });
});

describe("get current location", () => {
    it("should return data about current location", () => {
        expect(transferToCelsius(42)).toEqual(6);
        expect(transferToCelsius(46)).toEqual(8);
    });
});

describe("get info about location", () => {
    it('get coordinates with fetch by city', async () => {
        const mySearchKey = '2dd27939c6cb477fb8c60fee9afb9226';
        const searchPlace = 'Warsaw';
        const data = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchPlace}&key=${mySearchKey}&pretty=1&no_annotations=1&language=en`);
        const myJson = await data.json();
        expect(myJson).toBeDefined()
        expect(myJson.results[0].geometry.lat.toFixed(2)).toEqual('52.23');
        expect(myJson.results[0].geometry.lng.toFixed(2)).toEqual('21.01');
    });
    it('get city with fetch by coordinates', async () => {
        const mySearchKey = '2dd27939c6cb477fb8c60fee9afb9226';
        const searchPlace = '40.71008453, -74.01002595';
        const data = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchPlace}&key=${mySearchKey}&pretty=1&no_annotations=1&language=en`);
        const myJson = await data.json();
        expect(myJson).toBeDefined()
        expect(myJson.results[0].components.city).toEqual('New York');
    });
})

describe("get weather info", () => {
    it("should return object with data", () => {
        expect(searchWeather).toBeInstanceOf(Object);
    });
    it('get timezone with fetch by coordinates', async () => {
        const coordinates = '52.0976667,23.6871711';
        const data = await fetch(`https://api.darksky.net/forecast/1b56c1ed6898b38723daf6cf3031b657/${coordinates}?lang=en`);
        const myJson = await data.json();
        expect(myJson).toBeDefined()
        expect(myJson.timezone).toEqual('Europe/Minsk');
    });
    it('the weather data includes currently temperature info', async () => {
        const coordinates = '52.0976667,23.6871711';
        const data = await fetch(`https://api.darksky.net/forecast/1b56c1ed6898b38723daf6cf3031b657/${coordinates}?lang=en`);
        const myJson = await data.json();
        expect(myJson.currently.hasOwnProperty('temperature')).toBeTruthy();
    });
})

describe("get info for picture", () => {
    it('should return season', () => {
        expect(SearchPictureHelper.getSeason('12/19/2019, 11:00:46 PM')).toEqual('winter');
        expect(SearchPictureHelper.getSeason('08/01/2021, 08:39:02 AM')).toEqual('summer');
    });
    it('should return time of day', () => {
        expect(SearchPictureHelper.getDayTime('12/19/2019, 11:00:46 PM')).toEqual('night');
        expect(SearchPictureHelper.getDayTime('08/01/2021, 08:39:02 AM')).toEqual('morning');
    });
})

describe("check empty input", () => {
    it('throws on empty input', () => {
        expect(() => {
            searchByCity('');
        }).toThrow('Empty input');
    });
});