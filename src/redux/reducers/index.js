let defaultState = {
    data: []
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "GET_CAPSULE_DATA"){
        return {
            ...state,
            data:  action.data
        }
    } else{
        return {
            ...state
        }
    }
}

export default mainReducer;