import axios from 'axios';

// This is the ActionCreator

const API_KEY = 'b27c7b2b62069587';
const ROOT_URL = `http://api.wunderground.com/api/${API_KEY}`;

// Middlewares are Action gatekeepers  - functions that can let an action pass, manipulate it, log it, or stop it from going to the reducer
// ("Modify actions" before the reducer)

export const FETCH_CONDITIONS = 'FETCH_CONDITIONS';
export const FETCH_FORECAST = 'FETCH_FORECAST';

export function fetchConditions(city, state) {
  city = city.replace(/ /g,"_");
  const url = `${ROOT_URL}/conditions/q/${state}/${city}.json`;
  const request = axios.get(url); // request is a promise
	console.log('Conditions request: ', request);
  return {
    type: FETCH_CONDITIONS,
    payload: request
  };
}

export function fetchForecast(city, state) {
  city = city.replace(/ /g,"_");
  const url = `${ROOT_URL}/forecast10day/q/${state}/${city}.json`;
  const request = axios.get(url);
  console.log('Forecast request: ', request);
  return {
    type: FETCH_FORECAST,
    payload: request
  }
}
