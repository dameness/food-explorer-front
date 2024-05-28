import { Button } from '@/components/ui/button';
import { ChevronRight, Heart, Minus, Plus } from 'lucide-react';
export const Card = () => {
  return (
    <div className='relative flex flex-col items-center justify-center gap-3 p-6 sm:min-w-72 min-w-52 sm:h-[28rem] min-h-72  dark:bg-Dark/Dark-300 bg-Light/Light-200 border dark:border-Dark/Dark-200 border-Light/Light-400 rounded-lg'>
      <Heart className='absolute top-3 right-3' />
      <img
        src='/assets/mask-group.png'
        className='sm:w-48 xs:w-36 w-24'
        alt='food'
      />
      <h1 className='flex gap-1 items-center'>
        Caesar salad
        <ChevronRight size={14} />
      </h1>

      <p className='-mt-1 sm:block hidden font-thin truncate max-w-full'>
        This is the description of this food descripton of the food this is the
        description.
      </p>
      <h1 className='dark:text-Tints/Cake-200 text-Tints/Mint-100 sm:text-2xl xs:text-xl text-lg'>
        $ 9.99
      </h1>

      <div className='flex items-center gap-1'>
        <Minus />
        01
        <Plus />
      </div>
      <Button>include</Button>
    </div>
  );
};
