import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { GETBooks } from './api/Books';
import type { Book_Type } from './types/Books.types';
import Book_Card from './components/card/Book_Card';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Alert_Dialog from './components/alert/Alert_Dialog';
import Add_BookForm from './components/form/Add_BookForm';
import Edit_BookForm from './components/form/Edit_BookForm';
import { useStore } from './hooks/useStore';
import { Button, ButtonGroup, CircularProgress, IconButton } from '@mui/material';
import { RiFilterFill, RiFilterLine } from "react-icons/ri";

const App = () => {
  const booksPerPage = 10;
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: GETBooks
  });
  const { state, dispatch } = useStore();
  const [filter, setFilter] = useState({ open: false, type: '', value: '' });

  
  const filteredData = useMemo(() => {
    if (!data) return [];
    const value = filter.value.trim().toLowerCase();
    return data.filter((book: Book_Type) => {
      if (filter.type === 'Genre') return book.genre?.toLowerCase().includes(value);
      if (filter.type === 'Status') return book.status?.toLowerCase().includes(value);
      return true; // fallback if type is not set
    });
  }, [data, filter]);

  const paginateData = () => {
    const start = (state.page - 1) * booksPerPage;
    return filteredData.slice(start, start + booksPerPage);
  };

  useEffect(() => {
    if (data) {
      const totalPages = Math.ceil(data.length / booksPerPage);
      dispatch({ type: 'SET_TOTAL_PAGES', payload: totalPages });
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <CircularProgress disableShrink thickness={4} color='primary' size={100} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">Error: {(error as Error).message}</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="w-full h-full p-3">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          {/* Filter Bar */}
          <div className="w-full h-[9dvh] flex items-center justify-center border-2 border-black rounded-xl overflow-x-auto">
            <div className="w-full h-full flex items-center justify-start gap-4">
              <IconButton onClick={() => setFilter({ ...filter, open: !filter.open, type: '' })}>
                {filter.open ? <RiFilterFill size={30} color='black' /> : <RiFilterLine size={30} color='black' />}
              </IconButton>
              {filter.open && (
                <ButtonGroup>
                  <Button
                    variant='outlined'
                    style={{
                      backgroundColor: filter.type === 'Genre' ? 'black' : 'white',
                      color: filter.type === 'Genre' ? 'white' : 'black'
                    }}
                    onClick={() => setFilter({ ...filter, type: 'Genre' })}
                  >Genre</Button>
                  <Button
                    variant='outlined'
                    style={{
                      backgroundColor: filter.type === 'Status' ? 'black' : 'white',
                      color: filter.type === 'Status' ? 'white' : 'black'
                    }}
                    onClick={() => setFilter({ ...filter, type: 'Status' })}
                  >Status</Button>
                </ButtonGroup>
              )}
            </div>
          </div>

          {/* Filter Input */}
          {filter.type && (
            <div className="flex items-center justify-start gap-4 w-full h-full">
              <input
                type="text"
                className="w-[800px] max-w-full px-2 py-4 rounded-xl border-2 border-[#ccc]"
                placeholder={`Search by ${filter.type}`}
                value={filter.value}
                onChange={(e) => {
                  dispatch({ type: 'CHANGE_PAGE', payload: 1 });
                  setFilter({ ...filter, value: e.target.value });
                }}
              />
            </div>
          )}
        </div>

        {/* Book List */}
        <div className="w-full h-full flex flex-wrap align-center justify-center gap-10 p-5">
          {paginateData().map((book: Book_Type) => (
            <Book_Card key={book.id} Book={book} />
          ))}
        </div>
      </main>
      <Alert_Dialog />
      <Add_BookForm />
      <Edit_BookForm />
      <Footer />
    </>
  );
};

export default App;
