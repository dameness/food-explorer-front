import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { TextArea } from './ui/textarea';

export const AddFoodForm = () => {
  return (
    <form className='w-full flex flex-col gap-2 [&>input]:bg-Dark/Dark-800'>
      <label htmlFor='image'> Image</label>
      <Input id='image' />
      <label htmlFor='name'> Name</label>
      <Input id='name' />
      <label htmlFor='category'> Category</label>
      <Select id='category' />
      <label htmlFor='ingredients'> Ingredients</label>
      <Input id='ingredients' />
      <label htmlFor='price'> Price</label>
      <Input id='price' />
      <label htmlFor='description'> Description</label>
      <TextArea id='description' />
      <Button className='bg-Tints/Tomato-400' />
    </form>
  );
};
