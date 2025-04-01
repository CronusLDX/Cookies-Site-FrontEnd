import React from 'react';
import Carrinho from './Carrinho/Carrinho';

const CarrinhoSection: React.FC = () => {
  return (
    <section className="w-full flex justify-end items-center h-full m-auto  ">
      <Carrinho />
    </section>
  );
};

export default CarrinhoSection;
