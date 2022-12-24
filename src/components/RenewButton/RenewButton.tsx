import { IconButton, IIconButtonProps } from '../IconButton/IconButton';
import RenewIcon from '../Icons/RenewIcon';

export const RenewButton = (props: IIconButtonProps) => {
  return (
    <IconButton className='renewButton-container' {...props}>
      <RenewIcon fontSize='inherit' />
    </IconButton>
  );
};
