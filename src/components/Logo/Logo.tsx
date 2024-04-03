import { styled, SvgIcon } from '@mui/material';
import React from 'react';
import { ISvgProps } from '../SvgIcon/SvgIcon';
import Link from 'next/link';

type IPickedSvgProps = Pick<ISvgProps, 'color' | 'sx' | 'className'>;

const StyledLogo = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  width: 'fit-content',

  '>svg': {
    width: 118,
    height: 24,
  },

  [theme.breakpoints.up('sm')]: {
    '>svg': {
      width: 190,
      height: 39,
    },
  },
}));

export const Logo = ({ color = 'inherit', sx, ...props }: IPickedSvgProps) => {
  return (
    <StyledLogo href={'/'} {...props} sx={sx}>
      <SvgIcon
        {...props}
        color={color}
        width='118'
        height='24'
        viewBox='0 0 118 24'
      >
        <path d='M.197 20V5.594h7.68599c.812 0 1.547.189 2.20501.567.672.378 1.204.889 1.596 1.533.392.644.588 1.372.588 2.184v.462c0 .812-.203 1.561-.609 2.247-.392.686-.924 1.239-1.596 1.659-.65801.42-1.39301.63-2.20501.63h-3.255V20h-4.41Zm4.40999-8.337h1.932c.266 0 .49-.056.672-.168.182-.112.322-.273.42-.483.112-.21.168-.462.168-.756 0-.35-.105-.665-.315-.945-.196-.28-.511-.42-.945-.42h-1.932v2.772ZM25.1351 20.21c-.644 0-1.183-.084-1.617-.252-.434-.182-.77-.469-1.008-.861-.224-.392-.336-.924-.336-1.596 0-.21-.014-.462-.042-.756-.028-.294-.105-.574-.231-.84-.112-.28-.294-.511-.546-.693-.252-.196-.602-.294-1.05-.294h-1.218V20h-4.305V5.594h8.064c.686 0 1.33.14 1.932.42.616.266 1.113.665 1.491 1.197.392.518.588 1.169.588 1.953 0 .658-.119 1.253-.357 1.785-.238.518-.553.959-.945 1.323-.392.35-.819.616-1.281.798v.105c.406.126.756.301 1.05.525.294.224.532.49.714.798.182.294.315.602.399.924.098.322.147.637.147.945 0 .21.007.455.021.735.014.266.049.525.105.777.07.252.175.476.315.672.154.196.364.329.63.399v.861c-.378.154-.791.259-1.239.315-.448.056-.875.084-1.281.084Zm-6.048-8.505h2.142c.21 0 .399-.063.567-.189.182-.14.322-.322.42-.546.098-.224.147-.483.147-.777 0-.448-.105-.777-.315-.987-.21-.21-.462-.315-.756-.315h-2.205v2.814ZM30.1466 20V5.594h10.815l-.42 3.36h-6.069v2.1h5.838v3.213h-5.838v2.373h6.069l.42 3.36h-10.815Zm49.4156 0V5.594h4.431v10.878h5.25l.42 3.528h-10.101Zm12.4729 0V5.594h4.431v10.878h5.2499l.42 3.528H92.0351Zm18.2269.21c-.868 0-1.687-.161-2.457-.483-.756-.336-1.421-.791-1.995-1.365-.574-.574-1.029-1.239-1.365-1.995-.322-.77-.483-1.589-.483-2.457v-2.184c0-.868.161-1.68.483-2.436.336-.77.791-1.442 1.365-2.016.574-.574 1.239-1.022 1.995-1.344.77-.336 1.589-.504 2.457-.504h1.176c.868 0 1.68.168 2.436.504.77.322 1.442.77 2.016 1.344.574.574 1.022 1.246 1.344 2.016.336.756.504 1.568.504 2.436v2.184c0 .868-.168 1.687-.504 2.457-.322.756-.77 1.421-1.344 1.995-.574.574-1.246 1.029-2.016 1.365-.756.322-1.568.483-2.436.483h-1.176Zm.588-3.276c.322 0 .609-.056.861-.168.266-.112.497-.259.693-.441.196-.196.343-.42.441-.672.112-.252.168-.525.168-.819v-4.032c0-.294-.056-.567-.168-.819-.098-.252-.245-.476-.441-.672-.196-.196-.427-.343-.693-.441-.252-.112-.539-.168-.861-.168-.308 0-.595.056-.861.168-.266.112-.497.266-.693.462-.196.182-.35.399-.462.651-.098.252-.147.525-.147.819v4.032c0 .294.049.567.147.819.112.252.266.476.462.672.196.196.427.35.693.462.266.098.553.147.861.147Zm-35.5684 3.9939c.8304 1.6696-.8304 3.9653-2.9065 2.7131 0 0-7.889-5.2175-13.702-7.5132l-3.5293 6.6784c-.2076.6261-1.6609 1.6696-2.9065.8348-9.7575-5.6349-7.8891-16.69612 4.3597-12.9395l4.9826-9.60028c1.038-1.66962 3.1141-1.25221 3.7369 0l9.9651 19.82668Zm-20.553-6.2611c-7.8891-2.2957-3.7369 3.1306-2.0761 4.1741l2.0761-4.1741Zm13.4944 1.461-4.9826-9.39163-2.6989 5.63493c1.8685.6261 6.0206 2.9219 7.6815 3.7567Z' />
      </SvgIcon>
    </StyledLogo>
  );
};
