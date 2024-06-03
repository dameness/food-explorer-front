import type { Food as FoodType } from '@/models/food';
import { Minus, Plus, ReceiptText } from 'lucide-react';
import { Button } from './ui/button';

interface FoodProps {
  data: FoodType;
}

export const FoodInfo = ({ data }: FoodProps) => {
  return (
    <div className='h-[calc(100vh-240px)] flex md:flex-row flex-col gap-4 items-center justify-center'>
      <img src='/assets/mask-group.png' className='md:w-80 w-56' alt='food' />

      <div className='flex flex-col md:gap-4 gap-8 items-center justify-center px-8'>
        <h1 className='md:self-start self-auto text-3xl font-medium'>
          {data.name}
        </h1>
        <h1 className='md:self-start self-auto md:text-lg text-md'>
          {data.description}
        </h1>
        <div className='grid lg:grid-cols-6 grid-cols-3 gap-3 w-full'>
          {data.ingredients.map((ingredient) => (
            <div
              key={ingredient}
              className=' font-medium text-center text-sm text-ellipsis overflow-hidden bg-Dark/Dark-1000 px-2 py-1.5 rounded-md'
            >
              {ingredient}
            </div>
          ))}
        </div>
        <div className='w-full md:self-start self-auto flex items-center md:justify-start justify-between gap-6'>
          <div className='flex items-center gap-2 font-semibold text-lg'>
            <Minus />
            01
            <Plus />
          </div>
          <Button className='justify-center md:max-w-60 w-2/3'>
            <ReceiptText />
            {'$ ' + data.price.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};
