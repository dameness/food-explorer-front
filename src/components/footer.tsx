import { Copyright, Hexagon } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full dark:bg-slate-900'>
      <div className='flex justify-between items-center max-w-7xl p-4 h-16 mx-auto'>
        <div className='flex items-center gap-1 font-semibold sm:text-base text-sm opacity-40'>
          <Hexagon size={20} className='opacity-60' />
          food explorer
        </div>

        <h1 className='flex items-center text-xs opacity-60'>
          <Copyright size={12} />
          2024 - All rights reserved.
        </h1>
      </div>
    </footer>
  );
};
