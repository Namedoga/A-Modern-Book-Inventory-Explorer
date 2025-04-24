// pages/books/[id].tsx
import { useRouter } from 'next/router';
import Layout from '../../Layout/Layout';
import { useEffect, useState } from 'react';

type Book = { id: number; title: string; author: string; summary: string; /* add other fields here */ };

export default function BookDetail() {
  const { query, isFallback } = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query.id) return;
    fetch(`/api/books/${query.id}`)  // or your BigBookAPI endpoint
      .then(r => r.json())
      .then(data => setBook(data))
      .catch(() => setError('Could not load book details.'));
  }, [query.id]);

  if (isFallback || !book) {
    return <Layout><p className="p-6 text-center">Loading…</p></Layout>;
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
        <p className="text-lg font-semibold mb-2">By {book.author}</p>
        <p className="mb-6">{book.summary}</p>
        {/* render more details: genre, price, published year, image, etc. */}
      </div>
    </Layout>
  );
}
