import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
]);
