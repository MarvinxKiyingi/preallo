import { IconButton, IIconButtonProps } from '../IconButton/IconButton';
import PlusIcon from '../Icons/PlusIcon';

export const AddButton = (props: IIconButtonProps) => {
  return (
    <IconButton className='addButton-conatiner' {...props}>
      <PlusIcon fontSize='inherit' />
    </IconButton>
  );
};
