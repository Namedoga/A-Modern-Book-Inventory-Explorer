// pages/index.tsx
import { useState, useEffect } from 'react';
import Layout from '../layout/Layout'; 

interface Book {
  id: number;
  title: string;
}

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
  
    setBooks([
      { id: 1, title: "Book 1" },
      { id: 2, title: "Book 2" },
    ]);
  }, []);

  return (
    <Layout>
      <div>
        <h1>Book Inventory</h1>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <a href={`/book/${book.id}`}>{book.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
