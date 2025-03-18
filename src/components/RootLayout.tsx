import Apresentacao from './Apresentacao';
import Navbar from './Navbar';
import Diferencial from './Diferencial';
import Footer from './Footer';

export const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Apresentacao />
      <Diferencial />
      <Footer />
    </>
  );
};
