import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const PlusIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M12 4V20M4 12H20' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round' />
    </SvgIcon>
  );
};

export default PlusIcon;
