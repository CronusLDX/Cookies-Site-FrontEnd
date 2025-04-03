import React from 'react';
import '../../node_modules/swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Produto from './Produto';
import { CarrinhoInfo } from '../entities/Interfaces';
import CookieAveia from '../../public/assets/cookie-aveia.svg';
import CookieLimao from '../../public/assets/cookie-limao.svg';
import CookieMorango from '../../public/assets/cookie-morango.svg';
import CookieGotas from '../../public/assets/cookie-gotas.svg';

const Cardapio: React.FC = () => {
  const cartData: CarrinhoInfo[] = [
    {
      id: 1,
      title: 'Cookie de Aveia',
      description:
        'Cookie de aveia  com  um delicioso sabor, além do mais é saudável!',
      image: CookieAveia,
      price: 8.99,
      quantity: 0,
    },
    {
      id: 2,
      title: 'Cookie de Limão',
      description: 'Cookie de limão com uma deliciosa cobertura de limão.',
      image: CookieLimao,
      price: 9.99,
      quantity: 0,
    },
    {
      id: 3,
      title: 'Cookie de Morango',
      description:
        'Cookie de morango com especial sabor que a própria fruta traz!',
      image: CookieMorango,
      price: 7.99,
      quantity: 0,
    },
    {
      id: 4,
      title: 'Cookie de Gotas de Chocolate',
      description: 'Cookie de gotas de chocolate tradicional!',
      image: CookieGotas,
      price: 10.99,
      quantity: 0,
    },
  ];
  return (
    <section
      className="w-full h-full flex flex-col items-center bg-[#fdfafa] "
      id="cardapio"
    >
      <h1 className="lily text-3xl lg:text-5xl mt-12 mb-10">Cardápio</h1>
      <p className="lg:text-lg text-md font-light mb-10">
        Arraste para um dos lados e verifique o nosso cardápio!
      </p>
      <div className="w-[89%] lg:w-[95%] h-64 lg:h-80 justify-center flex items-center py-5 mb-16 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full h-full px-2 py-10 justify-center flex rounded-2xl "
        >
          {cartData.map((item, index) => (
            <SwiperSlide key={index}>
              <Produto prop={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cardapio;
