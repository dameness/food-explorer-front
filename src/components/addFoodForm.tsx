import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { TextArea } from './ui/textarea';

export const AddFoodForm = () => {
  return (
    <form className='grid md:grid-cols-9 grid-cols-1 gap-4'>
      <div className='flex flex-col gap-4 md:col-span-2'>
        <label htmlFor='image'> Image</label>
        <Input id='image' />
      </div>
      <div className='flex flex-col gap-4 md:col-span-4'>
        <label htmlFor='name'> Name</label>
        <Input id='name' placeholder='Ex.: Caesar salad' />
      </div>
      <div className='flex flex-col gap-4 md:col-span-3'>
        <label htmlFor='category'> Category</label>
        <Select id='category' />
      </div>
      <div className='flex flex-col gap-4 md:col-span-7'>
        <label htmlFor='ingredients'> Ingredients</label>
        <Input id='ingredients' />
      </div>
      <div className='flex flex-col gap-4 md:col-span-2'>
        <label htmlFor='price'> Price</label>
        <Input id='price' placeholder='$ 0.00' />
      </div>
      <div className='flex flex-col gap-4 md:col-span-9'>
        <label htmlFor='description'> Description</label>
        <TextArea
          className='border-0 md:h-48 h-32'
          id='description'
          placeholder='Briefly describe the food ingredients and composition...'
        />
      </div>
      <Button className='bg-Tints/Tomato-400 mt-4 flex items-center justify-center'>
        Submit
      </Button>
    </form>
  );
};
