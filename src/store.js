import { createStore, applyMiddleware, combineReducers } from 'redux';
import notificationsReducer from 'widgets/behavior';
import fakeReducer from 'widgets/fakeReducer';
import expensesListReducer from 'pages/Dashboard/behavior';
import logger from './loggerMiddleware'

import thunk from 'redux-thunk';

const node1reducer = combineReducers({
    notifications: notificationsReducer,
    fakeReducer: fakeReducer,
    expensesList: expensesListReducer,
})


export default createStore(node1reducer, applyMiddleware(thunk, logger));