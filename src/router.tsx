import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout';
import { Home } from './pages/home';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
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
