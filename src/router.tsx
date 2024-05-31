import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout';
import { Home } from './pages/home';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { Food } from './pages/food';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/food',
        element: <Food />,
      },
    ],
    //FAZER ERROR ELEMENT
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
