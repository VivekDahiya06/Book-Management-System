import { Alert, Button, Dialog, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { DELETEBooks } from '../../api/Books';

const Alert_Dialog = () => {

    const Store = useContext(StoreContext);
    if (!Store) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <h1 className="text-xl text-red-500">Something went wrong.</h1>
            </div>
        );
    }
    const { state, dispatch } = Store;


    const handleAlert = () => {
        DELETEBooks(state.bookId)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    dispatch({ type: 'SET_DELETE_ALERT', payload: false });
                    dispatch({ type: 'SET_ALERT_TYPE', payload: 'success' });
                    dispatch({ type: 'SET_ALERT_MESSAGE', payload: 'Book Deleted' });
                    dispatch({ type: 'TOGGLE_ALERT', payload: true });
                }
            })
            .catch((err) => {
                dispatch({ type: 'SET_DELETE_ALERT', payload: false });
                dispatch({ type: 'SET_ALERT_TYPE', payload: 'error' });
                dispatch({ type: 'SET_ALERT_MESSAGE', payload: err.message });
                dispatch({ type: 'TOGGLE_ALERT', payload: true });
            })
        dispatch({ type: 'SET_BOOK_ID', payload: 0 });
    }
    return (
        <>
            {/* Alert Message for Error */}
            < Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }
                }
                open={state.alertOpen}
                autoHideDuration={2000}
                onClose={() => dispatch({ type: 'TOGGLE_ALERT', payload: false })}
            >
                <Alert
                    severity={state.alertType}
                    variant="filled"
                >
                    {state.alertMessage}
                </Alert>
            </Snackbar>


            {/* Delete Backdrop opened on click of Delete Button */}
            <Dialog
                open={state.deleteAlert || state.editAlert}
            >

                <DialogTitle sx={{
                    fontSize: '2rem',
                    fontWeight: 'bolder',
                    '@media screen and (width <= 380px)': {
                        fontSize: '1.5rem'
                    }
                }}>
                    Are You Sure ?
                </DialogTitle>

                <DialogContent sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <Button
                        variant='contained'
                        color='error'
                        onClick={handleAlert}>
                        Yes
                    </Button>
                    <Button
                        variant='contained'
                        color='success'
                        onClick={() => {
                            if (state.deleteAlert) {
                                dispatch({ type: 'SET_DELETE_ALERT', payload: false });
                            }
                            else {
                                dispatch({ type: 'SET_EDIT_ALERT', payload: false });
                            }
                            dispatch({ type: 'SET_BOOK_ID', payload: 0 });
                        }}>
                        No
                    </Button>
                </DialogContent>

            </Dialog>
        </>
    )
}

export default Alert_Dialog
