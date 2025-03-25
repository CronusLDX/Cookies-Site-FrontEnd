import React from 'react';
import FAQ from './FAQ';
import { FaqInfo } from '../interfaces/Interfaces';

const FAQSection: React.FC = () => {
  const faqData: FaqInfo[] = [
    {
      question:
        'O que torna os Cookies Fit diferentes dos cookies tradicionais?',
      answer:
        'Os Cookies Fit são preparados com ingredientes naturais e nutritivos, como farinha de amêndoas, açúcar de coco e proteínas vegetais. Eles possuem menos açúcar e gordura saturada, sendo ideais para quem busca uma alimentação equilibrada sem abrir mão do sabor.',
    },
    {
      question: 'Os Cookies Fit são indicados para dietas restritivas?',
      answer:
        'Sim! Nossos cookies são desenvolvidos para atender diferentes dietas, incluindo opções sem glúten, sem lactose e com baixo índice glicêmico. Sempre recomendamos conferir os ingredientes e consultar um nutricionista caso tenha restrições específicas.',
    },
    {
      question: 'Como armazenar os Cookies Fit para manter a qualidade?',
      answer:
        'Os Cookies Fit devem ser armazenados em um local fresco e seco, de preferência em um recipiente hermético. Caso prefira prolongar a durabilidade, você pode armazená-los na geladeira por até duas semanas ou no freezer por até três meses.',
    },
  ];
  return (
    <section className="bg-white text-black py-16 px-8 text-center w-full h-full justify-center items-center flex flex-col">
      <h1 className="text-4xl lg:text-5xl lily mb-[3rem] text-black">FAQ</h1>
      <div
        className="flex flex-col justify-center items-center w-full
       h-full"
      >
        {faqData.map((faq, index) => {
          return <FAQ key={index} prop={faq} />;
        })}
      </div>
    </section>
  );
};

export default FAQSection;
