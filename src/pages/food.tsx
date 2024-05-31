import { FoodInfo } from '@/components/foodInfo';
import { ChevronLeft } from 'lucide-react';

export const Food = () => {
  return (
    <>
      <div>
        <ChevronLeft />
        return
      </div>

      <FoodInfo
        data={{
          name: 'Caesar Salad',
          description: 'This is the food description',
          ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
          price: 9.99,
        }}
      />
    </>
  );
};
