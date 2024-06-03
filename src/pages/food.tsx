import { FoodInfo } from '@/components/foodInfo';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Food = () => {
  return (
    <>
      <Link to='/' className='mt-4 flex items-center place-self-start'>
        <ChevronLeft />
        return
      </Link>

      <FoodInfo
        data={{
          name: 'Caesar Salad',
          description: 'This is the food description',
          ingredients: [
            'ingredient1312312312312',
            'ingre2',
            'ingredient3',
            'i4',
            'ingredient5',
          ],
          price: 9.99,
        }}
      />
    </>
  );
};
