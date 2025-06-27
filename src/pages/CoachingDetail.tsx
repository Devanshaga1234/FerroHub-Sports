import React from 'react';
import { useParams } from 'react-router-dom';

export const CoachingDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Details for Coaching Plan: {id}</h1>
      <p className="mt-4 text-gray-600">You can expand this page with more info and logic.</p>
    </div>
  );
};
