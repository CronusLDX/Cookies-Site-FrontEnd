import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
]);
