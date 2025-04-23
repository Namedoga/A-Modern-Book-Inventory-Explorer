import { useState } from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../Layout/Layout'));
const MainContent = dynamic(() => import('../components/MainContent'));
const LoadingSpinner = dynamic(() => import('../components/LoadingSpinner'));

type Book = {
  id: number;
  title: string;
  author: string;
  summary: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a book name.');
      setBooks([]);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await res.json();

      if (data.totalItems > 0) {
        const mapped: Book[] = data.items.map((item: any, idx: number) => ({
          id: idx,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
          summary:
            item.volumeInfo.description?.slice(0, 200) ||
            'No description available',
        }));
        setBooks(mapped);
      } else {
        setBooks([]);
        setError('No books found.');
      }
    } catch (e) {
      console.error(e);
      setError('Failed to fetch book data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          🔍 Discover Books
        </h1>

        {/* Search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Type a title…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={fetchBooks}
            className="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-center text-red-500 italic mb-6">{error}</p>
        )}

        {/* Loading or content */}
        {loading ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <MainContent books={books} />
        )}
      </div>
    </Layout>
  );
}
