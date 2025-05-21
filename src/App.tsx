import { useQuery } from '@tanstack/react-query';
import type { Book_Type } from './types/Books.types';
import Book_Card from './components/card/Book_Card';
import Header from './components/header/Header';
import { CircularProgress } from '@mui/material';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import { GETBooks } from './api/Books';
import Alert_Dialog from './components/alert/Alert_Dialog';
import Add_BookForm from './components/form/Add_BookForm';
import { useStore } from './hooks/useStore';

const App = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: GETBooks
  });
  const { state, dispatch } = useStore();

  useEffect(() => {
    if (data) {
      const totalPages = Math.round(data.length / booksPerPage);
      dispatch({ type: 'SET_TOTAL_PAGES', payload: totalPages });
    }
  }, [data, dispatch]);



  if (isLoading) return (
    <div className='h-screen flex justify-center items-center'>
      <CircularProgress
        disableShrink
        thickness={4}
        color='primary'
        size={100}
      />
    </div>
  );

  if (error) return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-red-500">Error: {error.message}</h1>
    </div>
  );


  const booksPerPage = 10;


  const paginateData = () => {
    const startIndex = (state.page - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return data.slice(startIndex, endIndex);
  }


  return (
    <>
      <Header />
      <main className="w-full h-full p-3">
        <div className="w-full h-full flex flex-wrap align-center justify-center gap-10 p-5">
          {
            paginateData().map((book: Book_Type) => (
              <Book_Card key={book.id} Book={book} />
            ))
          }
        </div>
      </main>
      <Alert_Dialog />
      <Add_BookForm />
      <Footer />
    </>
  )
}

export default App;
