import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
  summary: string;    // full description
  year: number | null;
};

type Props = {
  book: Book;
  onClose: () => void;
};

export default function BookDetailModal({ book, onClose }: Props) {
  return (
    <div
      className="
        fixed inset-0 
        bg-black bg-opacity-50 
        flex items-center justify-center 
        z-50
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white rounded-xl p-6 
          max-w-lg w-full 
          relative
        "
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
          {book.title}
        </h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">By</span> {book.author}
        </p>
        <p className="text-gray-500 mb-4 text-sm">
          Published: {book.year ?? 'N/A'}
        </p>
        <div className="text-gray-700 whitespace-pre-wrap">
          {book.summary}
        </div>
      </div>
    </div>
  );
}
