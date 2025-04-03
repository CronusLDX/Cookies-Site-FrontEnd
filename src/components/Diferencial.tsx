import deliveryLogo from '../../public/assets/delivery-logo.svg';
import moneyLogo from '../../public/assets/money-logo.svg';
import bastaoLogo from '../../public/assets/bastao-de-asclepio.svg';

const Diferencial = () => {
  return (
    <section
      className="bg-[#3d0d0d] text-white py-10  px-5 text-center w-full h-full "
      id="diferencial"
    >
      <h2 className="text-4xl lg:text-5xl lily my-[5rem]">Nosso Diferencial</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <div className="border-2 border-white rounded-lg p-5 flex flex-col items-center">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mb-3">
            <img src={deliveryLogo} alt="Ícone 1" className="w-8 h-8" />
          </div>
          <h3 className=" lg:text-2xl md:text-xl sm:text-xl  italic lily">
            Entrega Expressa: Cookies Quentinhos em Tempo Recorde!
          </h3>
          <p className="italic lg:text-lg md:text-sm sm:text-sm my-5">
            Nosso serviço de delivery foi pensado para quem não quer esperar
            para saborear um cookie delicioso!
          </p>
        </div>

        <div className="border-2 border-white rounded-lg p-5 flex flex-col items-center">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mb-3">
            <img src={moneyLogo} alt="Ícone 2" className="w-8 h-8" />
          </div>
          <h3 className="lg:text-2xl md:text-xl sm:text-xl  italic lily">
            Os Melhores Preços para os Melhores Cookies!
          </h3>
          <p className="italic lg:text-lg md:text-sm sm:text-sm my-5">
            Aqui, qualidade e economia andam juntas! Nossos cookies artesanais
            são feitos com ingredientes selecionados e vendidos pelo melhor
            preço do mercado
          </p>
        </div>
      </div>

      <div className="border-2 border-white rounded-lg p-7 mt-8 max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full mb-3">
          <img src={bastaoLogo} alt="Ícone 3" className="w-10 h-10" />
        </div>
        <h3 className="lg:text-2xl md:text-xl sm:text-xl italic lily">
          Higiene e Qualidade em Cada Etapa!
        </h3>
        <p className="italic lg:text-lg md:text-sm sm:text-sm my-5">
          Prezamos pela máxima higiene no preparo dos nossos cookies! Seguimos
          rigorosos padrões de limpeza e segurança alimentar para garantir que
          cada mordida seja não apenas deliciosa, mas também segura e confiável
        </p>
      </div>
    </section>
  );
};

export default Diferencial;
