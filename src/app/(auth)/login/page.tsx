// page.tsx
'use client';
// page.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [personId, setPersonId] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    console.log(`Searching for person ID: ${personId}`);
  };

  const handleRedirect = () => {
    window.location.href = 'https://universe.roboflow.com/facial-expression-detection-no05b/facial-expression-detection2/model/1';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        {/* User Name */}
        <h2 className="text-4xl font-semibold text-center mb-8">Rahul Roy</h2>

        {/* Person ID Input and Search Button */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search for an existing user..."
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button
            onClick={handleSearch}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-[120px]"
          >
            Search
          </button>
        </div>

        {/* Redirect Button with distinguishable dark shade */}
        <button
          onClick={handleRedirect}
          className="w-full rounded-full border border-solid border-transparent bg-[#0f69cf] hover:bg-[#357ABD] text-white font-semibold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Go to Facial Expression Detection
        </button>
      </div>
    </div>
  );
}
