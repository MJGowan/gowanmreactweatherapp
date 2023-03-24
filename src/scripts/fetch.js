import { prod, dev } from "./environment.js";

let apiKey = "";

if (prod.isLive) {
    apiKey = prod.apiKey;
} else {
    apiKey = dev.apiKey;
}


async function Fetch(input) {
    let currentApi = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=' + apiKey)
    let currentData = await currentApi.json();
    console.log(currentData);

    let location = currentData.name + ", " + currentData.sys.country;

    let longitude = currentData.coord.lon;
    let latitude = currentData.coord.lat;

    // if((currentData.weather).length > 1){
    //     for(let i = 0; i < currentData.weather.length; i++){
    //     }
    // }
    let weather = currentData.weather.main;

    let kelvinTemp = currentData.main.temp;
    let kelvinMin = currentData.main.temp_min;
    let kelvinMax = currentData.main.temp_max;

    let temp = Math.ceil((((kelvinTemp - 273.15) * 9) / 5) + 32);
    let min = Math.ceil((((kelvinMin - 273.15) * 9) / 5) + 32);
    let max = Math.ceil((((kelvinMax - 273.15) * 9) / 5) + 32);

    FiveDays(longitude, latitude);

    return {location, longitude, latitude, weather, temp, min, max};
}

//--------------------------------

async function FiveDays(longitude, latitude) {
    let fiveDayApi = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey);
    let fiveDayData = await fiveDayApi.json();
    console.log(fiveDayData);

    //----Day One------------
    let d1Temp = fiveDayData.list[1].main.temp;
    let dayOneTemp = Math.ceil((((d1Temp - 273.15) * 9) / 5) + 32);
    let dayOneWeather = fiveDayData.list[1].weather[0].main;
    let dayOneDateTime = fiveDayData.list[1].dt_txt;

    let dtOneArray = dayOneDateTime.split(' ');
    let dayOneDate = dtOneArray[0];

    //----Day Two------------
    let d2Temp = fiveDayData.list[9].main.temp;
    let dayTwoTemp = Math.ceil((((d2Temp - 273.15) * 9) / 5) + 32);
    let dayTwoWeather = fiveDayData.list[9].weather[0].main;
    let dayTwoDateTime = fiveDayData.list[9].dt_txt;

    let dtTwoArray = dayTwoDateTime.split(' ');
    let dayTwoDate = dtTwoArray[0];

    //----Day Three----------
    let d3Temp = fiveDayData.list[17].main.temp;
    let dayThreeTemp = Math.ceil((((d3Temp - 273.15) * 9) / 5) + 32)
    let dayThreeWeather = fiveDayData.list[17].weather[0].main;
    let dayThreeDateTime = fiveDayData.list[17].dt_txt;

    let dtThreeArray = dayThreeDateTime.split(' ');
    let dayThreeDate = dtThreeArray[0];

    //----Day Four-----------
    let d4Temp = fiveDayData.list[25].main.temp;
    let dayFourTemp = Math.ceil((((d4Temp - 273.15) * 9) / 5) + 32);
    let dayFourWeather = fiveDayData.list[25].weather[0].main;
    let dayFourDateTime = fiveDayData.list[25].dt_txt;

    let dtFourArray = dayFourDateTime.split(' ');
    let dayFourDate = dtFourArray[0];

    //----Day Five-----------
    let d5Temp = fiveDayData.list[33].main.temp;
    let dayFiveTemp = Math.ceil((((d5Temp - 273.15) * 9) / 5) + 32);
    let dayFiveWeather = fiveDayData.list[33].weather[0].main;
    let dayFiveDateTime = fiveDayData.list[33].dt_txt;

    let dtFiveArray = dayFiveDateTime.split(' ');
    let dayFiveDate = dtFiveArray[0];

    return {dayOneTemp, dayOneWeather, dayOneDate, dayTwoTemp, dayTwoWeather, dayTwoDate, dayThreeTemp, dayThreeWeather, dayThreeDate, dayFourTemp, dayFourWeather, dayFourDate, dayFiveTemp, dayFiveWeather, dayFiveDate};
}

export {Fetch, FiveDays};