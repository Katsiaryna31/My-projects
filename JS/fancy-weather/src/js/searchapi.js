import { searchLocation } from './searchCity'

export async function searchCurrentLocation() {
    const myKey = '7c00b01310773e';
    const url = `https://ipinfo.io/json?token=${myKey}`;
    const response = await fetch(url)
    const myJson = await response.json();
    searchLocation(myJson.loc);
    return myJson.loc;
  };