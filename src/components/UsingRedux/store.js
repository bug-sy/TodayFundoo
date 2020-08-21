import { createStore } from 'redux'
import toggleReducer from './ToggleGridOrList/toggleReducer'

const store = createStore(toggleReducer)

export default store