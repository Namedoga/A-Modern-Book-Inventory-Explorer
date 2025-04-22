import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
  summary: string;
};

type MainContentProps = {
  books: Book[];
};

export default function MainContent({ books }: MainContentProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-lg shadow-lg p-6 transition transform hover:-translate-y-1 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">{book.title}</h2>
          <p className="text-gray-600 font-semibold">Author: {book.author}</p>
          <p className="text-gray-600 italic mt-2">{book.summary}</p>
        </div>
      ))}
    </div>
  );
}
