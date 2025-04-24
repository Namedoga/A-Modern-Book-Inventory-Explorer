// src/components/BookFilters.tsx
import React from 'react';

type Filters = {
  author: string;
  year: string;
};

type Props = {
  filters: Filters;
  onChange: (newFilters: Filters) => void;
};

export default function BookFilters({ filters, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      {/* Author filter */}
      <input
        type="text"
        placeholder="Filter by author…"
        value={filters.author}
        onChange={e => onChange({ ...filters, author: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {/* Year filter */}
      <input
        type="number"
        placeholder="Year"
        value={filters.year}
        onChange={e => onChange({ ...filters, year: e.target.value })}
        className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}
