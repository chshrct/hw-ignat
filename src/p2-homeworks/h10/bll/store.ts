import { combineReducers, createStore } from 'redux'
import themeReducer from '../../h12/bll/themeReducer'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

const store = createStore(reducers,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

export type AppStoreType = ReturnType<typeof reducers>
