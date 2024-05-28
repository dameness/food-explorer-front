import { Card } from '@/components/card';
import { Slider } from '@/components/slider';

export const Home = () => {
  return (
    <>
      <div className='mt-10 flex items-center w-full xs:h-32 h-28 p-3 dark:GradientsDark-100 GradientsLight-100 '>
        <img
          className='object-cover overflow-visible xs:w-48 w-40 '
          src='/assets/burguer.png'
          alt='burguer'
        />
        <div className='xs:text-left text-center'>
          <h1 className='sm:text-3xl xs:text-2xl text-xl font-semibold'>
            Unique taste
          </h1>
          <h1 className='sm:text-lg xs:text-base text-sm font-light'>
            Prepared with selected ingredients
          </h1>
        </div>
      </div>

      <h1 className='mt-4 self-start sm:text-2xl xs:text-xl text-lg'>Meals</h1>
      <Slider cards={[1, 2]} />
      <h1 className='self-start sm:text-2xl xs:text-xl text-lg'>Main Dishes</h1>
      <div className='w-full flex gap-4 items-center'>
        <Card />
        <Card />
      </div>
    </>
  );
};
