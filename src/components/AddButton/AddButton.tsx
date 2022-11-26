import { IconButton, IIconButtonProps } from '../IconButton/IconButton';
import PlusIcon from '../Icons/PlusIcon';

export const AddButton = (props: IIconButtonProps) => {
  return (
    <IconButton className='addButton-container' {...props}>
      <PlusIcon fontSize='inherit' />
    </IconButton>
  );
};
