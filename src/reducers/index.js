import { combineReducers } from 'redux';
import ConditionsReducer from './reducer_conditions';
import ForecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
	conditions: ConditionsReducer,
	forecast: ForecastReducer
});

export default rootReducer;
