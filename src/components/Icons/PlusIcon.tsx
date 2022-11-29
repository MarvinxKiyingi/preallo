import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const PlusIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M4 11.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5ZM12.75 4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 16a.75.75 0 0 0 1.5 0h-1.5ZM4 12.75h5v-1.5H4v1.5Zm8 0h8v-1.5h-8v1.5ZM11.25 4v16h1.5V4h-1.5Z' />
    </SvgIcon>
  );
};

export default PlusIcon;
