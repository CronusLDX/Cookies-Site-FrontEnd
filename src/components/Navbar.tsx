import cookieLogo from '/src/assets/cookie-logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-auto lg:h-[8rem] md:h-[7rem] sm:h-[7rem] flex flex-row justify-around items-center browm px-5 py-3 lg:gap-[25rem] md:gap-10 sm:gap-5">
      <div className="flex items-center w-auto h-full pr-10">
        <img src={cookieLogo} alt="cookie-logo" className="h-[4rem] " />
        <a
          href="#"
          className="italliano text-3xl lg:text-[45px] font-medium text-white ml-1"
        >
          Cookies Fit
        </a>
      </div>
      <div className=" flex justify-center items-center gap-[5rem] md:gap-[2rem] sm:gap-[2rem] w-auto ">
        <a
          href="#"
          className="italliano text-3xl lg:text-[40px] font-medium  text-white lg:px-10 md:px-0 sm:px-0  "
        >
          Sobre
        </a>
        <a
          href="#"
          className="italliano text-3xl lg:text-[40px] font-medium text-white lg:px-10 md:px-0 sm:px-0 "
        >
          Cardápio
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
