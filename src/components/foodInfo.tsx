import type { Food as FoodType } from '@/models/food';
import { Minus, Plus, ReceiptText } from 'lucide-react';
import { Button } from './ui/button';

interface FoodProps {
  data: FoodType;
}

export const FoodInfo = ({ data }: FoodProps) => {
  return (
    <div className='flex sm:flex-row flex-col gap-4 items-center justify-center'>
      <img src='/assets/mask-group.png' className='w-56' alt='food' />

      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='sm:self-start self-auto text-2xl font-medium'>
          {data.name}
        </h1>
        <h1 className='sm:self-start self-auto text-sm'>{data.description}</h1>
        <div className='grid sm:grid-cols-6 grid-cols-3 gap-3 w-11/12 sm:max-w-full max-w-72 '>
          {data.ingredients.map((ingredient) => (
            <div
              key={ingredient}
              className=' font-medium text-center xs:text-sm text-xs text-ellipsis overflow-hidden bg-Dark/Dark-1000 px-2 py-1.5 rounded-md'
            >
              {ingredient}
            </div>
          ))}
        </div>
        <div className='sm:self-start self-auto flex items-center gap-3'>
          <div className='flex items-center gap-2 font-semibold text-lg'>
            <Minus />
            01
            <Plus />
          </div>
          <Button>
            <ReceiptText />
            order - {'$ ' + data.price.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};
