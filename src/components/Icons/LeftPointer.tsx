import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const LeftPointer = (props: ISvgProps) => {
  return (
    <SvgIcon {...props} sx={{ fill: 'none' }}>
      <path d='M16 20L8 12L16 4' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </SvgIcon>
  );
};
export default LeftPointer;
