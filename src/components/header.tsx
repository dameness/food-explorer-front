import { ThemeContext } from '@/contexts/themeContext';
import { ChefHat, Hexagon, LogOut, Menu, Moon, Sun } from 'lucide-react';
import { useContext } from 'react';
import { SearchBar } from './search';
export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className='w-full dark:bg-Dark/Dark-600'>
      <div className='flex justify-between items-center max-w-7xl mx-auto h-24 p-4'>
        <div className='flex items-center gap-2 '>
          <Menu size={28} />
          <button onClick={toggleTheme}>
            {theme === 'light' ? <Sun size={28} /> : <Moon size={28} />}
          </button>
        </div>
        <div className='flex items-center gap-1 font-semibold sm:text-xl text-lg'>
          <Hexagon className='text-Tints/Cake-100' fill='#065E7C' />
          food explorer
        </div>
        <SearchBar onSubmit={() => {}} />
        <div className='flex items-center gap-2'>
          <ChefHat size={28} />
          <LogOut className='sm:block hidden' size={28} />
        </div>
      </div>
    </header>
  );
};
