import React from 'react';
import cookieLogo from '/src/assets/cookie-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-full browm  shadow-sm flex flex-col ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={cookieLogo} className="h-full" alt="Cookie Logo" />
            <span className="self-center text-5xl whitespace-nowrap italliano text-white">
              Cookie Fit
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} &nbsp;
          <a href="#" className="hover:underline">
            Cookies Fit™.
          </a>
          &nbsp; All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
