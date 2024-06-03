import type { Food as FoodType } from '@/models/food';
import { Minus, Plus, ReceiptText } from 'lucide-react';
import { Button } from './ui/button';

interface FoodProps {
  data: FoodType;
}

export const FoodInfo = ({ data }: FoodProps) => {
  return (
    <>
      <img
        src='/assets/mask-group.png'
        className='sm:w-48 xs:w-36 w-24'
        alt='food'
      />

      <h1>{data.name}</h1>
      <h1>{data.description}</h1>
      <div className='grid grid-cols-3 gap-3 w-11/12 max-w-72'>
        {data.ingredients.map((ingredient) => (
          <div
            key={ingredient}
            className='text-center xs:text-sm text-xs text-ellipsis overflow-hidden bg-Dark/Dark-1000 px-2 py-1.5 rounded-md'
          >
            {ingredient}
          </div>
        ))}
      </div>

      <h1 className='text-2xl'></h1>

      <div className='flex items-center'>
        <div className='flex items-center gap-1'>
          <Minus />
          01
          <Plus />
        </div>
        <Button>
          <ReceiptText />
          order - {'$ ' + data.price.toFixed(2)}
        </Button>
      </div>
    </>
  );
};
