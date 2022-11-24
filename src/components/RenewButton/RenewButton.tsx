import { IconButton, IIconButtonProps } from '../IconButton/IconButton';
import RenewIcon from '../Icons/RenewIcon';

export const RenewButton = (props: IIconButtonProps) => {
  return (
    <IconButton {...props}>
      <RenewIcon fontSize='inherit' />
    </IconButton>
  );
};
