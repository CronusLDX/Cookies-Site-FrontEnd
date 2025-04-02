import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes';
import { CartProvider } from './contexts/CartContext';
import { PopUpProvider } from './contexts/PopUpContext';

const App = () => {
  return (
    <PopUpProvider>
      <CartProvider>
        <RouterProvider router={routes}></RouterProvider>
      </CartProvider>
    </PopUpProvider>
  );
};

export default App;
