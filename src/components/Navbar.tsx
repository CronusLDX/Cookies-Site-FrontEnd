import React, { useState } from 'react';
import cookieLogo from '/src/assets/cookie-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="browm dark:bg-gray-900 relative  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={cookieLogo} className="h-16" alt="Cookie Logo" />
          <span className="self-center text-2xl font-light  text-white lily">
            Cookie Fit
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? 'flex' : 'hidden'
          } w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out transform`}
          id="navbar-sticky"
        >
          <ul className="flex gap-20 flex-col p-4 md:p-0 mt-4 font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white   ">
            <li>
              <a
                href="#"
                className="block lily text-2xl py-2 px-3  rounded-sm "
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lily  text-2xl py-2 px-3  rounded-sm "
              >
                Cardápio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block lily  text-2xl py-2 px-3  rounded-sm "
              >
                Nossa Equipe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
