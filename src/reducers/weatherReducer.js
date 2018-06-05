import { FETCH_CONDITIONS, FETCH_FORECAST } from '../actions';

export default function(state = {}, action) {

	switch(action.type) {
		case FETCH_CONDITIONS:
		console.log('action.payload.data: ', action.payload.data.current_observation);
		const currentObservation = action.payload.data.current_observation;
			return {
				...state,
				conditions: currentObservation
			}
		case FETCH_FORECAST:
		console.log('action.payload.data: ', action.payload.data.forecast.simpleforecast.forecastday);
		const forecast10day = action.payload.data.forecast.simpleforecast.forecastday;
			return {
				...state,
				forecast: forecast10day
			}
		default:
			return state;
	}
}
