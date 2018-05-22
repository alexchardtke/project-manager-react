import { FETCH_CONDITIONS, FETCH_FORECAST } from '../actions';

export default function(state = {}, action) {

	switch(action.type) {
		case FETCH_CONDITIONS:
			return {
				...state,
				conditions: action.payload.data
			}
		case FETCH_FORECAST:
			return {
				...state,
				forecast: action.payload.data
			}
		default:
			return state;
	}
}
