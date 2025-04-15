import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">📚 Modern Book Inventory Explorer</h1>
        <p className="text-gray-600 mt-2">Easily manage and explore your book collection</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link to="/books" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600">📖 View Inventory</h2>
          <p className="text-gray-500 mt-1">Browse through the list of available books</p>
        </Link>

        <Link to="/add-book" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600">➕ Add New Book</h2>
          <p className="text-gray-500 mt-1">Add a new title to your inventory</p>
        </Link>

        <Link to="/search" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600">🔍 Search</h2>
          <p className="text-gray-500 mt-1">Find books by title, author, or ISBN</p>
        </Link>

        <Link to="/about" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600">ℹ️ About</h2>
          <p className="text-gray-500 mt-1">Learn more about this project</p>
        </Link>
      </main>
    </div>
  );
};

export default Home;
