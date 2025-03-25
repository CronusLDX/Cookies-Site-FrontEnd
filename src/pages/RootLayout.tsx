import Apresentacao from '../components/Apresentacao';
import Navbar from '../components/Navbar';
import Diferencial from '../components/Diferencial';
import Footer from '../components/Footer';
import Colaboradores from '../components/Colaboradores';
import FAQSection from '../components/FAQSection';

export const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Apresentacao />
      <Diferencial />
      <Colaboradores />
      <FAQSection />
      <Footer />
    </>
  );
};
