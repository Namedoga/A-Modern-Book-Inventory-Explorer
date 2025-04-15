import { useState, useEffect } from 'react';


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
    <div>
      <h1>Book Inventory</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
