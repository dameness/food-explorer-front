import type { Food as FoodType } from '@/models/food';
import { Minus, Plus, ReceiptText } from 'lucide-react';
import { Button } from './ui/button';

interface FoodProps {
  data: FoodType;
}

export const FoodInfo = ({ data }: FoodProps) => {
  return (
    <div className='flex md:flex-row flex-col gap-4 items-center justify-center'>
      <img src='/assets/mask-group.png' className='lg:w-72 w-64' alt='food' />

      <div className='flex flex-col md:gap-4 gap-8 items-center justify-center px-8'>
        <h1 className='md:self-start self-auto text-3xl font-medium'>
          {data.name}
        </h1>
        <h1 className='md:self-start self-auto md:text-lg text-md text-justify'>
          {data.description}
        </h1>
        <div className='grid lg:grid-cols-6 grid-cols-3 gap-x-6 gap-y-4 w-full'>
          {data.ingredients.map((ingredient) => (
            <div
              key={ingredient}
              className=' font-medium text-center text-sm truncate dark:bg-Dark/Dark-1000 bg-Light/Light-300 text-inherit px-2 py-1.5 rounded-md'
            >
              {ingredient}
            </div>
          ))}
        </div>
        <div className='md:mt-4 w-full md:self-start self-auto flex items-center md:justify-start justify-between gap-6'>
          <div className='flex items-center gap-2 font-medium text-xl'>
            <Minus strokeWidth={1} size={30} />
            01
            <Plus strokeWidth={1} size={30} />
          </div>
          <Button className='md:max-w-60 w-2/3 text-sm'>
            <ReceiptText size={16} className='mt-0.5' />
            {'$ ' + data.price.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};
