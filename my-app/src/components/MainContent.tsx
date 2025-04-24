import React, { useState } from 'react';
import BookDetailModal from './BookDetailModal';

type Book = {
  id: number;
  title: string;
  author: string;
  summary: string;
  year: number | null;
};

type MainContentProps = {
  books: Book[];
};

export default function MainContent({ books }: MainContentProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="
              bg-white rounded-3xl shadow-lg p-6
              transform hover:-translate-y-1 hover:shadow-2xl
              transition duration-300
              flex flex-col
            "
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
              {book.title}
            </h2>

            <p className="text-gray-600 font-medium mb-1">
              By {book.author}
            </p>

            <p className="text-gray-500 text-sm mb-6">
              Published: {book.year ?? 'N/A'}
            </p>

            <button
              onClick={() => setSelectedBook(book)}
              className="
                mt-auto
                w-full py-2
                bg-indigo-600 text-white rounded-lg
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400
                transition
              "
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
}
