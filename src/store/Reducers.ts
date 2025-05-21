import type { ReducerActionType, ReducerStateType } from "../types/Reducer.types"



export const initialState: ReducerStateType = {
    page: 1,
    totalPages: 0,
    deleteAlert: false,
    editAlert: false,
    alertOpen: false,
    formOpen: false,
    formType: 'add',
    alertMessage: '',
    alertType: 'error',
    searchBookFilter: '',
    bookId: 0,
    bookDetails: {
        id: 0,
        title: '',
        author: '',
        genre: '',
        publishedYear: 0,
        status: 'Available',
    }
}

export const Reducers = (state: ReducerStateType, action: ReducerActionType) => {
    switch (action.type) {
        case 'CHANGE_PAGE': return { ...state, page: action.payload }
        case 'SET_TOTAL_PAGES': return { ...state, totalPages: action.payload }
        case 'SET_DELETE_ALERT': return { ...state, deleteAlert: action.payload }
        case 'SET_EDIT_ALERT': return { ...state, editAlert: action.payload }
        case 'TOGGLE_ALERT': return { ...state, alertOpen: action.payload }
        case 'SET_FORM_OPEN': return { ...state, formOpen: action.payload }
        case 'SET_FORM_TYPE': return { ...state, formType: action.payload }
        case 'SET_ALERT_MESSAGE': return { ...state, alertMessage: action.payload }
        case 'SET_ALERT_TYPE': return { ...state, alertType: action.payload }
        case 'SET_SEARCH_BOOK_FILTER': return { ...state, searchBookFilter: action.payload }
        case 'SET_BOOK_ID': return { ...state, bookId: action.payload }
        case 'SET_BOOK_DETAILS': return { ...state, bookDetails: action.payload }
        default: return state;
    }

}