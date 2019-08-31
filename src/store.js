import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';    
import dashboardReducer from 'pages/Dashboard/behavior';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    form: formReducer
  })
  
export default createStore(rootReducer, applyMiddleware(thunk));