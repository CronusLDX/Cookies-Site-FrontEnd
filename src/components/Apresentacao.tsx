import React from 'react';

const Apresentacao: React.FC = () => {
  return (
    <section
      className="relative w-full h-full flex justify-center flex-col items-center bg-cover bg-center bg-[url('/src/assets/cookie-presentation.svg')]"
      id="apresentacao"
    >
      <div className="absolute top-0 left-0 w-full h-full wheat opacity-80"></div>
      <div className="w-full h-full flex justify-around pt-[120px] px-[50px] relative z-10 items-center">
        <div className="w-full h-full flex flex-col justify-center my-5 items-center text-center py-5">
          <h1 className="lily-light ">
            Compre agora mesmo os melhores Cookies saudáveis!
          </h1>
          <p className="lg:text-[21px] md:text-[20px] sm:text-[20px] font-light my-10">
            Descubra o sabor irresistível dos nossos cookies artesanais! Feitos
            com ingredientes selecionados, nossos cookies são a combinação
            perfeita de crocância e suavidade. Experimente a verdadeira delícia
            em cada mordida – o sabor que vai conquistar o seu coração. Não
            perca a oportunidade de saborear os melhores cookies saudáveis,
            feitos especialmente para você.
          </p>
          <a
            href="#"
            className="lg:w-[12rem] md:w-[8rem] sm:w-[8rem] bg-orange-400  border-2 border-orange-400 text-center my-10 py-2  px-1 lg:text-2xl md:text-xl sm:text-xl rounded-lg text-white  
          lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105 lg:hover:bg-orange-400 lg:hover:text-white lg:hover:shadow-lg lg:hover:shadow-orange-400/50 "
          >
            Comece Aqui
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
