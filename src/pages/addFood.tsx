import { AddFoodForm } from '@/components/addFoodForm';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export const AddFood = () => {
  return (
    <div className='w-11/12 space-y-6'>
      <Link
        to='/'
        className='text-lg font-semibold mt-4 flex items-center place-self-start'
      >
        <ChevronLeft size={32} />
        return
      </Link>
      <h1 className='text-4xl font-medium'>New food</h1>
      <AddFoodForm />
    </div>
  );
};
