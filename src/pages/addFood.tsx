import { AddFoodForm } from '@/components/addFoodForm';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export const AddFood = () => {
  return (
    <>
      <Link
        to='/'
        className='text-lg font-semibold mt-4 flex items-center place-self-start'
      >
        <ChevronLeft size={32} />
        return
      </Link>
      <AddFoodForm />
    </>
  );
};
