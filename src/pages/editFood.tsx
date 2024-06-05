import { FoodForm } from '@/components/foodForm';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export const EditFood = () => {
  return (
    <div className='w-11/12 space-y-6'>
      <Link
        to='/'
        className='text-lg font-semibold mt-4 flex items-center place-self-start'
      >
        <ChevronLeft size={32} />
        return
      </Link>
      <h1 className='text-4xl font-medium'>Edit food</h1>
      <FoodForm type='edit' />
    </div>
  );
};
