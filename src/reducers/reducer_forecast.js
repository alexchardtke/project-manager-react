import { FETCH_FORECAST } from '../actions';

export default function(state = '', action) {

	switch(action.type) {
		case FETCH_FORECAST:
			return [ action.payload.data, ...state ];
	}
	return state;
}
