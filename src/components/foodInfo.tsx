import type { Food as FoodType } from '@/models/food';
import { Minus, Plus, ReceiptText } from 'lucide-react';
import { Button } from './ui/button';

interface FoodProps {
  data: FoodType;
}

export const FoodInfo = ({ data }: FoodProps) => {
  return (
    <>
      <h1 className='text-2xl'>{data.ingredients}</h1>
      <h1>{data.description}</h1>

      <img
        src='/assets/mask-group.png'
        className='sm:w-48 xs:w-36 w-24'
        alt='food'
      />
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
