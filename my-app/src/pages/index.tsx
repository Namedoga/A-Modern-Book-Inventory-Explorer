import React from 'react';
import Layout from '../Layout/Layout';
import MainContent from '../components/MainContent'; 

export default function Home() {
  const mockBooks = [
    {
      id: 1,
      title: 'Percy Jackson & The Olympians: The Lightning Thief',
      author: 'Rick Riordan',
      summary:
        'A modern fantasy following Percy Jackson, a demigod son of Poseidon, on a quest to prevent a war among the gods.',
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      summary: 'A classic novel set in the Jazz Age of the 1920s.',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      summary: 'A powerful story of racial injustice in the American South.',
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      summary: 'A dystopian tale of a future under an oppressive regime.',
    },
  ];

  return (
    <Layout>
      {/* Hero/Intro Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-16 text-center text-white mb-8">
        <h1 className="text-5xl font-bold mb-4">Modern Book Inventory Explorer</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore a curated collection of timeless classics and modern masterpieces.
        </p>
      </div>

      {/* Main Content: Book Cards */}
      <div className="container mx-auto px-4">
        <MainContent books={mockBooks} />
      </div>
    </Layout>
  );
}
