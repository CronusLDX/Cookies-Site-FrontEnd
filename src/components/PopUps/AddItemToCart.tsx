import React from 'react';
import { MdOutlineVerified } from 'react-icons/md';

const AddItemToCart: React.FC = () => {
  return (
    <div className="w-45 h-40 fixed top-10 bottom-10 z-100 bg-white text-black justify-center items-center flex flex-col mx-5 my-2 rounded-xl  transition-all ease-in-out duration-500 transform border-2 border-yellow-300 shadow-md shadow-yellow-400 animate-bounce">
      <div className="flex justify-center items-center w-ful h-full flex-col my-4">
        <MdOutlineVerified size={40} className="text-green-500" />
        <p className="text-md font-bold py-2 px-2 text-center">
          Item adicionado ao carrinho!
        </p>
      </div>
    </div>
  );
};

export default AddItemToCart;
