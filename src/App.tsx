import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={routes}></RouterProvider>
    </CartProvider>
  );
};

export default App;
