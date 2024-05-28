import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '@/contexts/themeContext';
import { Header } from './header';
import { Footer } from './footer';

export const RootLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='relative dark:text-Light/Light-300 text-Dark/Dark-1000 dark:bg-Dark/Dark-400 bg-Light/Light-200 min-h-screen'>
        <Header />
        <main className='flex flex-col items-center gap-4 w-[96%] max-w-7xl mx-auto min-h-[calc(100vh - 160px)]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
