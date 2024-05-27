import { Search } from 'lucide-react';

interface SearchBarProps {
  onSubmit: () => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className='sm:flex classname w-1/2 items-center hidden border border-slate-200/60 py-1.5 px-2 gap-1 rounded-lg'
    >
      <Search size={16} className='opacity-60' />
      <input
        className='bg-transparent text-sm'
        placeholder='Search for dishes or ingredients'
      />
    </form>
  );
};
