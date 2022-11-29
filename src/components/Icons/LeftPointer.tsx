import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const LeftPointer = (props: ISvgProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M9.47 8.47a.75.75 0 0 0 1.06 1.06L9.47 8.47Zm6.06-3.94a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06 16a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-6.94-9.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3-1.94 5-5-1.06-1.06-5 5 1.06 1.06Zm5 9.94-8-8-1.06 1.06 8 8 1.06-1.06Z' />
    </SvgIcon>
  );
};
export default LeftPointer;
