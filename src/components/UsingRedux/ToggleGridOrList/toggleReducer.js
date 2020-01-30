import { TOGGLE_GRID_OR_LIST } from './toggleTypes'

const initialState = {
    gridOrList: false
}

const toggleReducer = (state = initialState ,action) => {
    switch(action.type){
        case TOGGLE_GRID_OR_LIST : return {
            ...state,
            gridOrList: !state.gridOrList
        }
        default:return state

    }

}

export default toggleReducer