import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  //Récupére L'url de l'api venant de la variable GEO_API_URL et prend en compte les données des villes ayant au minimum 1M d'habitants + la recherche de l'utilisateur
  //Geo Api contient les options de la méthode fetch (Mehtod & Api key)
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          //Fais un map sur toutes les city récupérés
          options: response.data.map((city) => {
            return {
              //En value récupére la latitude et la longitude de la city pour l'api de météo
              //Ainsi que le nom et le zip
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  //Récupére ce que l"utilisateur a taper dans la barre de recherche avec le onChange dans l'input & passe la data récupéré
  const handleOnChange = (searchData) => {
    //Set le search avec la nouvele valeur
    setSearch(searchData);
    //Passe la data a la méthode on SearchChange de notre component Search
    onSearchChange(searchData);
  };

  return (
    //Async paginate est un module de recherche "react-select-async-paginate"
    <AsyncPaginate
      placeholder="Rechercher une ville"
      // Permet de limiter les appels successifs (Option du component AsyncPaginate)
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
