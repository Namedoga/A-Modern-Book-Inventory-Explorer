import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../components/LoadingSpinner';

const Layout = dynamic(() => import('../Layout/Layout'));
const MainContent = dynamic(() => import('../components/MainContent'));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}
