import React from 'react';
import { FaqInfo } from '../interfaces/Interfaces';

const FAQ: React.FC<{ prop: FaqInfo }> = ({ prop }) => {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setOpen(true);
    } else {
      setOpen(!open);
    }
    setIsOpen(!isOpen);
  };
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <button
        onClick={handleToggle}
        className={`w-auto lg:w-[60%] h-full flex justify-between items-center bg-[#fcf9f9] rounded-tl-lg rounded-tr-2xl px-4 py-4 cursor-pointer  lg:transition-all lg:duration-500 lg:ease-in-out lg:transform border-t-1 border-r-1 border-l-1 border-gray-300 ${
          open ? 'border-b-0' : 'border-b-1'
        }`}
      >
        <h2
          className={`text-md lg:text-xl ${
            open ? 'text-blue-500' : 'text-black'
          } transition-transform duration-500 ease-in-out transform`}
        >
          {prop.question}
        </h2>
        <div
          className="transition-transform duration-500 ease-in-out transform"
          style={{ transform: open ? 'rotate(-360deg)' : 'rotate(0deg)' }}
        >
          <span
            className={`text-3xl px-2 ${open ? 'text-blue-500' : 'text-black'}`}
          >
            {open ? '-' : '+'}
          </span>
        </div>
      </button>
      <div
        className={`w-auto lg:w-[60%] h-full bg-[#fcf9f9] rounded-bl-lg rounded-br-2xl px-4 py-4 transition-all duration-500 ease-in-out  cursor-pointer overflow-hidden border-b-1 border-r-1 border-l-1 border-gray-300 mb-3 ${
          open ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <span className="text-md lg:text-xl text-left">{prop.answer}</span>
      </div>
    </section>
  );
};

export default FAQ;
