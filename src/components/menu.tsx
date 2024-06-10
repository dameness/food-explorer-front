import { X } from 'lucide-react';
import { SearchBar } from './search';

export const Menu = ({ close }: { close: () => void }) => {
  return (
    <div className='absolute z-50 left-4 w-64 h-64 p-2 flex flex-col gap-2 dark:bg-Dark/Dark-1000 bg-Light/Light-300 rounded-lg'>
      <div className='flex items-center gap-1.5'>
        <button onClick={close}>
          <X size={26} />
        </button>
        <h1 className='text-xl font-medium'>Menu</h1>
      </div>
      <SearchBar
        className='w-11/12 dark:border-Light/Light-600 border-Light/Light-400 [&>*]:text-xs'
        onSubmit={() => {}}
      />
      <h1>Sair</h1>
    </div>
  );
};
