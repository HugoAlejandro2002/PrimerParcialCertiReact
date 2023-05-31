import React from 'react';

export const IconButton = ({ icon: Icon, onClick }) => {
  return (
    <button
      className="p-2 bg-blue-500 text-white rounded-full"
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};