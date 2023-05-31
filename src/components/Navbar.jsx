import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


export const Navbar = () => {


  return (
    <div className="flex flex-row bg-blue-500 p-4 text-white">

      <div className="flex flex-col items-center flex-1">
        <FaShoppingCart className="text-2xl mr-2" />
        Shop CAR
      </div>
    </div>
  );
};
