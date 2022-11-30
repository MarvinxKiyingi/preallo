import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const RenewIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M1.92 14.4a4.336 4.336 0 0 0 4.32 4.32h10.83l-2.535 2.535.69.69 3.36-3.36.33-.345-.33-.345-3.36-3.36-.69.69 2.535 2.535H6.24c-1.85 0-3.36-1.51-3.36-3.36V9.12h-.96v5.28Zm3.165-8.64.33.345 3.36 3.36.69-.69L6.93 6.24h10.83c1.85 0 3.36 1.51 3.36 3.36v5.28h.96V9.6a4.336 4.336 0 0 0-4.32-4.32H6.93l2.535-2.535-.69-.69-3.36 3.36-.33.345Z' />
    </SvgIcon>
  );
};

export default RenewIcon;
