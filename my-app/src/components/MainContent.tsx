import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../components/LoadingSpinner';


const Layout = dynamic(() => import('../Layout/Layout'));
const MainContent = dynamic(() => import('../components/MainContent'));


type Book = {
  id: number;
  title: string;
  author: string;
  summary: string;
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      
      setBooks([
        { id: 1, title: "Book 1", author: "Author 1", summary: "Summary 1" },
        { id: 2, title: "Book 2", author: "Author 2", summary: "Summary 2" },
      ]);
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout>
      <MainContent books={books} />
    </Layout>
  );
}