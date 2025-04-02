import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const EmptyCartError: React.FC = () => {
  return (
    <div className="w-45 h-40 fixed top-10 bottom-10 z-100 bg-white text-black justify-center items-center flex flex-col mx-5 my-5 rounded-xl  transition-all ease-in-out duration-500 transform  border-2 border-red-400 shadow-md shadow-red-600 animate-bounce">
      <div className="flex justify-center items-center w-ful h-full flex-col my-4">
        <IoIosCloseCircleOutline size={30} className="text-red-500" />
        <p className="text-md font-bold py-2 px-2 text-center">
          Carrinho está vazio! Não foi possível realizar a compra.
        </p>
      </div>
    </div>
  );
};

export default EmptyCartError;
