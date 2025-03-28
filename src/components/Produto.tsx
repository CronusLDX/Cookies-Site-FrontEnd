import React from 'react';
import { ProductInfo } from '../interfaces/Interfaces';

const Produto: React.FC<{ prop: ProductInfo }> = ({ prop }) => {
  const formattedCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  const SendInfo = () => {
    const info: ProductInfo = {
      title: prop.title,
      description: prop.description,
      image: prop.image,
      price: prop.price,
    };
    return info;
  };
  return (
    <section className="w-full h-full flex justify-center items-center bg-[#F6EFEF]  flex-col  rounded-2xl lg:hover:scale-105 transition-all duration-500 ease-in-out transform lg:hover:cursor-pointer ">
      <div className="w-[90%] h-full flex justify-between items-center py-7 px-5 lg:py-10 lg:px-7 gap-5">
        <div
          className=" h-[95%] lg:h-full w-[80%] lg:w-[80%] bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${prop.image})` }}
        ></div>
        <div className="flex flex-col   w-full h-full ">
          <h2 className="lily text-md lg:text-2xl py-2 lg:py-2">
            {prop.title}
          </h2>
          <p className="text-sm lg:text-lg font-light">{prop.description}</p>
          <div className="w-full h-full flex justify-between items-center my-5">
            <span className="text-lg lg:text-2xl font-bold">
              {formattedCurrency(prop.price)}
            </span>
            <button
              onClick={() => console.log(SendInfo())}
              className=" bg-red-400 lg:text-black text-white lg:bg-zinc-200 h-10 w-10 lg:h-12 lg:w-12 text-center justify-center flex items-center rounded-full  mr-0 lg:mr-2  lg:hover:bg-red-400 cursor-pointer lg:hover:text-white lg:hover:scale-105 transition-all duration-500 ease-in-out transform lg:hover:shadow-lg lg:hover:shadow-red-400/50 "
            >
              <span className="text-3xl justify-center flex items-center mb-1 ">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produto;
