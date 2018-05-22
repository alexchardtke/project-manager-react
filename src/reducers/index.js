import { combineReducers } from 'redux';
import ConditionsReducer from './reducer_conditions';
import ForecastReducer from './reducer_forecast';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
	// conditions: ConditionsReducer,
	// forecast: ForecastReducer
	weather: weatherReducer
});

export default rootReducer;
