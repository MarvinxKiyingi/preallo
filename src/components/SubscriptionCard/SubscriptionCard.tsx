import { Stack, Typography, styled } from '@mui/material';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined';
import { Button, IButtonProps as ButtonProps } from '../Button/Button';

type IButtonProps = Pick<
  ButtonProps,
  'variant' | 'fullWidth' | 'onClick' | 'disabled' | 'sx'
>;
export type ISubscriptionCard = {
  /** Choose between available icons, if not passed in a value the default one will be `"other"`  */
  icon: 'tv' | 'music' | 'audiobooks' | 'other';
  title: string;
  type: 'Tv' | 'Music' | 'Audiobooks' | 'Other';
};

const Container = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  border: '1px solid rgba(20, 55, 85, 0.1)',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.16)',
  borderRadius: theme.spacing(),
  transition: '0.2s',

  ':active': {
    transform: 'scale(0.95)',
    boxShadow: `0px 0px 20px -10px ${theme.palette.primary.main}`,
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 6),
  },
}));

const Icon = styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.grey[800],
  fontSize: theme.spacing(6),

  [theme.breakpoints.up('md')]: {
    fontSize: theme.spacing(9),
  },
}));

const TextContainer = styled(Stack)(({ theme }) => ({
  '.title': {
    ...theme.typography.h6,
    fontSize: theme.spacing(2),
    fontWeight: 600,

    [theme.breakpoints.up('md')]: {
      ...theme.typography.h6,
      fontWeight: 600,
    },
  },
  '.type': {
    ...theme.typography.body2,
    fontSize: 10,
    lineHeight: 'unset',

    [theme.breakpoints.up('md')]: {
      ...theme.typography.body2,
    },
  },
}));

const SubscriptionCard = ({
  icon = 'other',
  title,
  type = 'Other',
  ...props
}: ISubscriptionCard & IButtonProps) => {
  return (
    <Container className='SubscriptionCard' {...props}>
      <Icon className='icon'>
        {icon === 'tv' && <OndemandVideoOutlinedIcon fontSize='inherit' />}
        {icon === 'music' && <LibraryMusicOutlinedIcon fontSize='inherit' />}
        {icon === 'audiobooks' && <MenuBookOutlinedIcon fontSize='inherit' />}
        {icon === 'other' && <LinkOffOutlinedIcon fontSize='inherit' />}
      </Icon>
      <TextContainer>
        <Typography className='title' component='h2'>
          {title}
        </Typography>
        <Typography className='type' component='span'>
          {type}
        </Typography>
      </TextContainer>
    </Container>
  );
};

export default SubscriptionCard;
