import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '@/contexts/themeContext';
import { Header } from './header';

export const RootLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='dark:text-neutral-200 text-neutral-700'>
        <Header />
        <main className='min-w-full'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
