import { Search } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface SearchBarProps {
  onSubmit: () => void;
  className?: string;
}

export const SearchBar = ({ onSubmit, className }: SearchBarProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        'flex w-1/2 items-center  border border-slate-200/60 py-1.5 px-2 gap-1 rounded-lg',
        className
      )}
    >
      <Search size={16} className='opacity-60' />
      <input
        className='bg-transparent text-sm'
        placeholder='Search for dishes or ingredients'
      />
    </form>
  );
};
