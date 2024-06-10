import { ThemeContext } from '@/contexts/themeContext';
import {
  ReceiptText,
  Hexagon,
  LogOut,
  MenuIcon,
  Moon,
  Sun,
} from 'lucide-react';
import { useContext, useState } from 'react';
import { SearchBar } from './search';
import { Menu } from './menu';
export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);

  return (
    <header className='relative w-full dark:bg-Dark/Dark-600'>
      <div className='flex justify-between items-center max-w-7sxl mx-auto h-24 p-4'>
        <div className='flex items-center gap-2 '>
          <button
            onClick={() => setMenu((state) => !state)}
            className='sm:hidden block'
          >
            <MenuIcon size={28} />
          </button>
          <button onClick={toggleTheme}>
            {theme === 'light' ? <Sun size={28} /> : <Moon size={28} />}
          </button>
        </div>
        <div className='flex items-center gap-1 font-semibold sm:text-xl text-lg'>
          <Hexagon className='text-Tints/Cake-100' fill='#065E7C' />
          food explorer
        </div>
        <SearchBar className='sm:flex hidden' onSubmit={() => {}} />
        <div className='flex items-center gap-2'>
          <ReceiptText size={28} />
          <LogOut className='sm:block hidden' size={28} />
        </div>
      </div>
      {menu && <Menu close={() => setMenu(false)} />}
    </header>
  );
};
