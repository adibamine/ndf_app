import { createStore, applyMiddleware } from 'redux';
import notificationsReducer from 'widgets/behavior';
import thunk from 'redux-thunk';


export default createStore(notificationsReducer, applyMiddleware(thunk));