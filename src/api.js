
//Get les données venant de l'API GeoCities API
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_GEO_API_KEY}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

//Export l'url de l'api GEODBCity
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

//Export l'url de l'api openweather
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
//Export la key de l'api openweather
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
