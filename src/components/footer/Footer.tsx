import { useContext } from 'react'
import { StoreContext } from '../../store/StoreProvider';
import { Pagination } from '@mui/material';


const Footer = () => {
    const Store = useContext(StoreContext);
    if (!Store) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <h1 className="text-xl text-red-500">Something went wrong.</h1>
      </div>
    );
  }

    const { state, dispatch } = Store;

    return (
        <footer className='w-full flex items-center justify-center p-5'>
            <div className='w-full flex items-center justify-center gap-5 py-3'>
                <Pagination color='primary' count={state.totalPages} page={state.page} onChange={(e, page) => dispatch({ type: 'CHANGE_PAGE', payload: page })} />
            </div>
        </footer>
    )
}

export default Footer
