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
          <h1 className="lily-light text-[50px]">
            Compre agora mesmo os melhores Cookies saudáveis!
          </h1>
          <p className="text-[23px] font-light my-10">
            Descubra o sabor irresistível dos nossos cookies artesanais! Feitos
            com ingredientes selecionados, nossos cookies são a combinação
            perfeita de crocância e suavidade. Experimente a verdadeira delícia
            em cada mordida – o sabor que vai conquistar o seu coração. Não
            perca a oportunidade de saborear os melhores cookies saudáveis,
            feitos especialmente para você.
          </p>
          <a
            href="#"
            className="w-[12rem] bg-none border-2 border-orange-400 text-center my-10 py-3 text-2xl rounded-lg text-orange-600 
          transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-400 hover:text-white hover:shadow-lg"
          >
            Comece Aqui
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
