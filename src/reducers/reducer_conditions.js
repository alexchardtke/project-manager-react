import { FETCH_CONDITIONS } from '../actions';

export default function(state = '', action) {

	switch(action.type) {
		case FETCH_CONDITIONS:
			return [ action.payload.data, ...state ];
	}
	return state;
}
