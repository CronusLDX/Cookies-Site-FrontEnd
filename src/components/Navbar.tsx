import cookieLogo from '/src/assets/cookie-logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[8rem] browm flex justify-around items-center">
      <div className="flex justiy-center items-center py-5 px-5">
        <img src={cookieLogo} alt="cookie-logo" />
        <a
          href="#"
          className="italliano text-[50px] font-medium text-white decoration-none"
        >
          Cookies Fit
        </a>
      </div>
      <div className="flex justiy-center items-center py-5 px-10">
        <a
          href="#"
          className="italliano text-[50px] font-medium text-white decoration-none px-[10rem]"
        >
          Sobre Nós
        </a>
        <a
          href="#"
          className="italliano text-[50px] font-medium text-white decoration-none px-[10rem]"
        >
          Cardápio
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
