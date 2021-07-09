import { combineReducers } from 'redux';
import events from './events_reducer';
import upcomingMovies from './upcomingMovies_reducer';
import latest from './latest_reducer';

const rootReducer = combineReducers({

    events,
    upcomingMovies,
    latest
}); 

export default rootReducer;