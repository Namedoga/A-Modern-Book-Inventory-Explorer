import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { isbn } = useParams();  

  return (
    <div>
      <h1>Book Details</h1>
      <p>ISBN: {isbn}</p>
      {}
    </div>
  );
};

export default BookDetails;
