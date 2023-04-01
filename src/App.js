import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon]= searchData.value.split("")

    //Fetch les données de l'API openweather en récupérant les variables lon et lat
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=fr&units=metric`)

    //Fetch les données de l'API openweather pour les prévisions
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=fr&units=metric`)

    //Prend en entrée un tableau avec les deux appels APi et les renvoies quand les deux appels sont finis 
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
    .then(async (response) => {
      //Attend que la promesse soit résolue pour renvoyer les données 
      const weatherReponse = await response[0].json()
      const forecastReponse = await response[1].json()

      //Set avec les nouvelles données récupéré par l'API ainsi qu'avec le label de la ville 
      setCurrentWeather({city: searchData.label , ...weatherReponse})
      setForecast({city: searchData.label , ...forecastReponse})
    })
    .catch((err) => console.log(err))
  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/* Vérifie que la variable existe et si oui renvoie le composant */}
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      <Forecast />
    </div>
  );
}

export default App;
