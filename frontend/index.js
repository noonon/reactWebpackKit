/**
 * Created by noonon on 6/12/16.
 */

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { Router, Route, IndexRoute, hashHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer,routerMiddleware, push } from 'react-router-redux'

import components from './components'
import routes from './routes'
import {count as reducers} from './reducers'

const reduxRouterMiddleware = routerMiddleware(hashHistory)

const reducer = combineReducers({
    count: reducers,
    routing: routerReducer
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: components.App,
        childRoutes: routes
    } ]
};


const store = createStore(
    reducer,
    DevTools.instrument(),
    applyMiddleware(reduxRouterMiddleware)
);

const appHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(appHashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}
                routes= {rootRoute}/>
            <DevTools />
        </div>
    </Provider>,
    document.querySelector('.container')
);
