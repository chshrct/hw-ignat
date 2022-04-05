enum ActionsTypes {
    setLoading = 'SET_LOADING',
}

export type StateType = {
    isLoading: boolean
}

type SetLoadingAction = {
    type: ActionsTypes.setLoading
    payload:boolean
}

const initState: StateType = {
    isLoading: false,
}

export const loadingReducer = (
    state: StateType = initState,
    action: SetLoadingAction
): StateType => {
    // fix any
    switch (action.type) {
        case ActionsTypes.setLoading: {
            return {...state,isLoading:action.payload}
        }
        default:
            return state
    }
}

export const loading = (payload:boolean): SetLoadingAction => {
    return {
        type: ActionsTypes.setLoading,
        payload
    }
} // fix any
