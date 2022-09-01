import {createStore,applyMiddleware,compose} from 'redux'
import rootReduce from '../reduce/index'
import thunk from 'redux-thunk'

const composeEnhancers=
(typeof window!=='undefined'&&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
const store =createStore(
    rootReduce,
    composeEnhancers(applyMiddleware(thunk))
)
export default store;