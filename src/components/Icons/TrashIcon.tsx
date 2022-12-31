import React from 'react';
import { ISvgProps, SvgIcon } from '../SvgIcon/SvgIcon';

const TrashIcon = (props: ISvgProps) => {
  return (
    <SvgIcon {...props} sx={{ color: 'transparent' }}>
      <rect x='2' y='2' width='20' height='20' rx='10' fill='#FEE4E2' />
      <g clipPath='url(#clip0_862_3146)'>
        <path
          d='M13.6667 9.50001V9.16668C13.6667 8.69997 13.6667 8.46661 13.5758 8.28835C13.4959 8.13155 13.3685 8.00407 13.2117 7.92417C13.0334 7.83334 12.8 7.83334 12.3333 7.83334H11.6667C11.2 7.83334 10.9666 7.83334 10.7883 7.92417C10.6315 8.00407 10.5041 8.13155 10.4242 8.28835C10.3333 8.46661 10.3333 8.69997 10.3333 9.16668V9.50001M11.1667 11.7917V13.875M12.8333 11.7917V13.875M8.25 9.50001H15.75M14.9167 9.50001V14.1667C14.9167 14.8667 14.9167 15.2168 14.7804 15.4842C14.6606 15.7194 14.4694 15.9106 14.2342 16.0304C13.9668 16.1667 13.6167 16.1667 12.9167 16.1667H11.0833C10.3833 16.1667 10.0332 16.1667 9.76585 16.0304C9.53064 15.9106 9.33942 15.7194 9.21958 15.4842C9.08333 15.2168 9.08333 14.8667 9.08333 14.1667V9.50001'
          stroke='#D92D20'
          strokeWidth='0.833333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <rect x='2' y='2' width='20' height='20' rx='10' stroke='#FEF3F2' strokeWidth='3.33333' />
    </SvgIcon>
  );
};

export default TrashIcon;
