import { FoodInfo } from '@/components/foodInfo';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Food = () => {
  return (
    <>
      <Link
        to='/'
        className='text-lg font-semibold mt-4 flex items-center place-self-start'
      >
        <ChevronLeft size={32} />
        return
      </Link>

      <FoodInfo
        data={{
          name: 'Caesar Salad',
          description:
            'A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice (or lime juice), olive oil, eggs or egg yolks, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.',
          ingredients: [
            'lettuce',
            'croutons',
            'lemon juice',
            'olive oil',
            'eggs',
            'worcestershire sauce',
            'anchovies',
            'garlic',
            'dijon mustard',
            'parmesan',
            'black pepper',
          ],
          price: 9.99,
        }}
      />
    </>
  );
};
