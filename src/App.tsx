import { useQuery } from '@tanstack/react-query';
import type { Book_Type } from './types/Books.types';
import Book_Card from './components/card/Book_Card';
import Header from './components/header/Header';
import { CircularProgress } from '@mui/material';
// import { useState } from 'react';
import Footer from './components/footer/Footer';
import { StoreContext } from './store/StoreProvider';
import { useContext, useEffect } from 'react';

const App = () => {

  const getBooks = async () => {
    const response = await fetch('http://localhost:3000/books');
    return response.json();
  }


  const Store = useContext(StoreContext);

  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });

  useEffect(() => {
    if (data) {
      const totalPages = Math.round(data.length / booksPerPage);
      Store?.dispatch({ type: 'SET_TOTAL_PAGES', payload: totalPages });
    }
  }, [data]);

  
  if (!Store) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <h1 className="text-xl text-red-500">Something went wrong.</h1>
      </div>
    );
  }



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
    const startIndex = (Store.state.page - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return data.slice(startIndex, endIndex);
  }


  return (
    <>
      <Header />
      <main className="w-full h-full p-3">
        <div className="w-full h-full flex flex-wrap align-center justify-center gap-10 p-5">
          {
            paginateData().map((book: Book_Type, index: number) => (
              <Book_Card key={book.id} Book={book} index={index} />
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
