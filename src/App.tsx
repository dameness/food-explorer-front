import { ThemeContextProvider } from './contexts/themeContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const App = () => {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
};
