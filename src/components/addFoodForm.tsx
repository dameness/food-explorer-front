import { Input } from './ui/input';
import { Select } from './ui/select';
import { TextArea } from './ui/textarea';

export const AddFoodForm = () => {
  return (
    <form>
      <Input />
      <Input />
      <Select />
      <Input />
      <Input />
      <TextArea />
    </form>
  );
};
