import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [],
    //FAZER ERROR ELEMENT
  },
  {
    path: '/signin',
    element: <></>,
  },
  {
    path: '/signup',
    element: <></>,
  },
]);
