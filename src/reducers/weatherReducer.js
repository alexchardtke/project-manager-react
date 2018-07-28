import { FETCH_CONDITIONS, FETCH_FORECAST } from '../actions';

export default function(state = {}, action) {

	switch(action.type) {
		case FETCH_CONDITIONS:
			const currentObservation = action.payload.data.current_observation;
			return {
				...state,
				conditions: currentObservation
			}
		case FETCH_FORECAST:
			const forecastTenDay = action.payload.data.forecast.simpleforecast.forecastday;
			return {
				...state,
				forecast: forecastTenDay
			}
		default:
			return state;
	}
}
