import { useQuery } from '@tanstack/react-query';
import type { Book_Type } from './types/Books.types';
import Book_Card from './components/card/Book_Card';
import Header from './components/header/Header';

const App = () => {

  const getBooks = async () => {
    const response = await fetch('http://localhost:3000/books');
    return response.json();
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <>
      <Header />
      <main className="w-full h-full">
        <div className="w-full h-full flex flex-wrap align-center justify-center gap-5 p-5">
          {
            data.map((book: Book_Type, index: number) => (
              <Book_Card key={book.id} Book={book} index={index} />
            ))
          }
        </div>

      </main>
    </>
  )
}

export default App;
