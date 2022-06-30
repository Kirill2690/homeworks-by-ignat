const initState = {
isLoading:false
}

export const loadingReducer = (state = initState, action: LoadingActionType):typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading

            }
        }
        default: return state
    }
}
type LoadingActionType={
    type:'LOADING',
    isLoading:boolean
}

export const loadingAC = (isLoading:boolean): LoadingActionType => ({ type:'LOADING', isLoading}as const)// fix any