import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const RenewIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props} sx={{ fill: 'none' }}>
      <path
        stroke='#000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M15.333 4 18 6.91m0 0-2.667 2.908M18 6.91H8.667a2.56 2.56 0 0 0-1.886.852A3.049 3.049 0 0 0 6 9.818v1.455M8.667 20 6 17.09m0 0 2.667-2.908M6 17.09h9.333a2.56 2.56 0 0 0 1.886-.852A3.05 3.05 0 0 0 18 14.182v-1.455'
      />
    </SvgIcon>
  );
};

export default RenewIcon;
