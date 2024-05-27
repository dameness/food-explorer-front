import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../contexts/themeContext';

export const RootLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Outlet />
    </div>
  );
};
