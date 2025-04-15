// pages/Inventory.js
import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const books = [
    { isbn: '978-1234567890', title: 'Example Book 1' },
    { isbn: '978-9876543210', title: 'Example Book 2' },
  ];

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            <Link to={`/book/${book.isbn}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
