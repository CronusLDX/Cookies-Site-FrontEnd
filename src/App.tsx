import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes';

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
