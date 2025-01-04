import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age); 

  return (
    <div>
      <h1>Current Age: {age}</h1>
      {loading && <p>Loading...</p>} {/* Show loading message if loading */}
    </div>
  );
};

export default AgeDisplay;