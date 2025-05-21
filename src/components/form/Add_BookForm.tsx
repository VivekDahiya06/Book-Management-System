import {
    Button,
    TextField,
    Dialog,
    DialogTitle,
    Box
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { POSTBooks } from '../../api/Books';
import type { Book_Type } from '../../types/Books.types';


const Add_BookForm = () => {
    const Store = useContext(StoreContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Book_Type>();

    if (!Store) {
        return (
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-xl text-red-500">Something went wrong.</h1>
            </div>
        );
    }

    const { state, dispatch } = Store;

    const SubmitForm = (data: Book_Type) => {
        POSTBooks(data)
            .then((res) => {
                console.log(res);
                if (res.status === 201) {
                    dispatch({ type: 'SET_FORM_OPEN', payload: false });
                    dispatch({ type: 'SET_ALERT_TYPE', payload: 'success' });
                    dispatch({ type: 'SET_ALERT_MESSAGE', payload: 'Book Added' });
                    dispatch({ type: 'TOGGLE_ALERT', payload: true });
                }
            })
            .catch((err) => {
                dispatch({ type: 'SET_FORM_OPEN', payload: false });
                dispatch({ type: 'TOGGLE_ALERT', payload: true });
                dispatch({ type: 'SET_ALERT_TYPE', payload: 'error' });
                dispatch({ type: 'SET_ALERT_MESSAGE', payload: err.message });
            })
        // Reset the form after submission
        reset();
    };

    const handleClose = () => {
        dispatch({ type: 'SET_FORM_OPEN', payload: false });
        reset();
    };



    return (
        <Dialog
            open={state.formOpen}
            onClose={handleClose}
            maxWidth="sm"
        // fullWidth
        >
            <DialogTitle
                sx={{
                    fontSize: '2rem',
                    fontWeight: 'bolder',
                    '@media screen and (width <= 380px)': {
                        fontSize: '1.5rem',
                    },
                    textTransform: 'capitalize',
                }}
            >
                {state.formType} Book
            </DialogTitle>

            <main className="w-full p-5 flex gap-3">
                <form
                    onSubmit={handleSubmit(SubmitForm)}
                    className="w-full flex flex-col items-center justify-center gap-4"
                >
                    <Box className="w-full flex flex-wrap items-center justify-center gap-5">
                        <TextField
                            label="ID"
                            type="number"
                            {...register('id', {
                                required: true,
                                valueAsNumber: true,
                                min: { value: 1, message: 'ID must be greater than 0' },
                            })}
                            error={!!errors.id}
                            helperText={errors.id?.message}
                        />
                        <TextField
                            label="Title"
                            {...register('title', { required: 'Title is required'  })}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                        <TextField
                            label="Author"
                            {...register('author', { required: 'Author is required' })}
                            error={!!errors.author}
                            helperText={errors.author?.message}
                        />
                        <TextField
                            label="Year"
                            type="number"
                            {...register('publishedYear', {
                                required: true,
                                valueAsNumber: true,
                                min: { value: 1900, message: 'Year must be greater than 1900' },
                                max: { value: new Date().getFullYear(), message: 'Year must be less than current year' },
                            })}
                            error={!!errors.publishedYear}
                            helperText={errors.publishedYear?.message}
                        />
                        <TextField
                            label="Genre"
                            {...register('genre', { required: 'Genre is required' })}
                            error={!!errors.genre}
                            helperText={errors.genre?.message}
                        />
                        <TextField
                            label="Status"
                            {...register('status', { required: 'Status is required' })}
                            error={!!errors.status}
                            helperText={errors.status?.message}
                        />
                    </Box>

                    <Button
                        sx={{
                            mt: 2,
                            '@media (max-width: 520px)': {
                                mt: 1,
                            },
                        }}
                        variant="outlined"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </main>
        </Dialog>
    );
};

export default Add_BookForm;
