export interface ReducerStateType {
    page: number,
    totalPages: number
}

export interface ReducerActionType {
    type: 'CHANGE_PAGE' | 'SET_TOTAL_PAGES',
    payload: number
}

export const initialState: ReducerStateType = {
    page: 1,
    totalPages: 0
}

export const Reducers = (state: ReducerStateType, action: ReducerActionType) => {
    switch (action.type) {
        case 'CHANGE_PAGE': return { ...state, page: action.payload }
        case 'SET_TOTAL_PAGES': return { ...state, totalPages: action.payload }
        default: return state
    }

}