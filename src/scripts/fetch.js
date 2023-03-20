import {prod, dev} from "./environment.js";

let apiKey = "";

if(prod.isLive){
    apiKey = prod.apiKey;
}else{
    apiKey = dev.apiKey;
}


export default async function Fetch (input) {
    let currentApi = await fetch ('https://api.openweathermap.org/data/2.5/weather?q='+ input +'&appid=' + apiKey)
    let currentData = await currentApi.text();
    console.log(currentData);

    let fiveDayApi = await fetch ('api.openweathermap.org/data/2.5/forecast?q='+ input + '&appid=' + apiKey);
    let fiveDayData = await fiveDayApi.text();
    console.log(fiveDayData);

    return (currentData)
}