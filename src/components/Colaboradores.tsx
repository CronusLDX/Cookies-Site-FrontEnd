import '../../node_modules/swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CollabCard from './CollabCard';
import { CollabInfo } from '../entities/Interfaces';

const Colaboradores: React.FC = () => {
  const workersInfo: CollabInfo[] = [
    {
      name: 'Alonso da Silva',
      profileImage: './src/assets/pessoa1.svg',
      description:
        'Alonso é um mestre na arte da panificação, responsável por criar os deliciosos biscoitos e pães artesanais da Cookies Fit. \nEle é um dos nossos melhores!',
    },
    {
      name: 'Alonso da Silva',
      profileImage: './src/assets/pessoa2.svg',
      description:
        'Alonso é um mestre na arte da panificação, responsável por criar os deliciosos biscoitos e pães artesanais da Cookies Fit. Ele é um dos nossos melhores!',
    },
    {
      name: 'Alonso da Silva',
      profileImage: './src/assets/pessoa2.svg',
      description:
        'Alonso é um mestre na arte da panificação, responsável por criar os deliciosos biscoitos e pães artesanais da Cookies Fit. Ele é um dos nossos melhores!',
    },
  ];
  return (
    <section
      className="bg-[#3d0d0d] text-white py-16 px-8 text-center w-full"
      id="colaboradores"
    >
      <h1 className="text-4xl lg:text-5xl lily mb-[3rem]">Nossa Equipe</h1>
      <p className="text-xl font-light mb-10">
        Arraste para a esquerda ou para a direita!
      </p>

      <div className="w-full h-full mb-3">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="h-full w-full justify-center items-center flex text-center"
        >
          {workersInfo.map((worker, index) => {
            return (
              <SwiperSlide key={index} className="cursor-pointer">
                <CollabCard prop={worker} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Colaboradores;
