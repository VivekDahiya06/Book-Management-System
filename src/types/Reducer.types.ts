import type { Book_Type } from "./Books.types";

export interface ReducerStateType {
    page: number,
    totalPages: number,
    deleteAlert: boolean,
    editAlert: boolean,
    alertOpen: boolean,
    formOpen: boolean,
    formType: 'add' | 'edit',
    alertMessage: string,
    alertType: 'error' | 'success' | 'warning' | 'info',
    searchBookFilter: string,
    bookId: number,
    bookDetails : Book_Type
}

interface ChangePageAction { type: 'CHANGE_PAGE'; payload: number };
interface SetTotalPagesAction { type: 'SET_TOTAL_PAGES'; payload: number };
interface SetDeleteAlertAction { type: 'SET_DELETE_ALERT'; payload: boolean };
interface SetEditAlertAction { type: 'SET_EDIT_ALERT'; payload: boolean };
interface ToggleAlertAction { type: 'TOGGLE_ALERT'; payload: boolean };
interface SetFormOpenAction { type: 'SET_FORM_OPEN'; payload: boolean };
interface SetFormTypeAction { type: 'SET_FORM_TYPE'; payload: 'add' | 'edit' };
interface SetAlertMessageAction { type: 'SET_ALERT_MESSAGE'; payload: string };
interface SetAlertTypeAction { type: 'SET_ALERT_TYPE'; payload: 'error' | 'success' | 'warning' | 'info' };
interface SetSearchBookFilterAction { type: 'SET_SEARCH_BOOK_FILTER'; payload: string };
interface SetBookIdAction { type: 'SET_BOOK_ID'; payload: number };
interface SetBookDetailsAction { type: 'SET_BOOK_DETAILS'; payload: Book_Type };


export type ReducerActionType =
    | ChangePageAction
    | SetTotalPagesAction
    | SetDeleteAlertAction
    | SetEditAlertAction
    | ToggleAlertAction
    | SetFormOpenAction
    | SetFormTypeAction
    | SetAlertMessageAction
    | SetAlertTypeAction
    | SetSearchBookFilterAction
    | SetBookIdAction
    | SetBookDetailsAction;