//Get les données venant de l'API GeoCities API
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e6ca3b6178msh95803c5c5737682p1e1f3djsn4d6ac5ee4420',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

//Export l'url de l'api GEODBCity
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

//Export l'url de l'api openweather
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
//Export la key de l'api openweather
export const WEATHER_API_KEY = 'b2aee055d05ceb410aee27c68d26be53'
