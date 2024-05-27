import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '@/contexts/themeContext';
import { Header } from './header';
import { Footer } from './footer';

export const RootLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='dark:text-neutral-200 text-neutral-700'>
        <Header />
        <main className='flex w-[96%] max-w-7xl mx-auto h-[calc(100vh - 160px)] flex-col items-center'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
