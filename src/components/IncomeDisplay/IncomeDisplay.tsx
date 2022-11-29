import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { AddButton } from '../AddButton/AddButton';
import { CardType, ICardType } from '../CardType/CardType';
import { IIconButtonProps } from '../IconButton/IconButton';

export type IIncomeDisplay = {
  income: string;
};

const StyledIncomeDisplay = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2),
  display: 'flex',
  width: '334px',
  height: '165px',
  [theme.breakpoints.up('md')]: {
    width: '487.53px',
    height: '246px',
    padding: theme.spacing(3),
  },

  '.textConatiner': {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    '>*+*': {
      paddingTop: theme.spacing(2),
    },
    '>:last-child': {
      marginTop: 'auto',
    },
    '.title': {
      [theme.breakpoints.up('md')]: {
        // @ts-ignore
        ...theme.typography.h4,
      },
    },
    '.price': {
      fontWeight: 600,
      [theme.breakpoints.up('md')]: {
        // @ts-ignore
        ...theme.typography.h1,
        fontWeight: 600,
      },
    },
    '.description': {
      [theme.breakpoints.up('md')]: {
        // @ts-ignore
        ...theme.typography.textLarge,
      },
    },
  },
  '.iconContainer': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&>*': {
      alignSelf: 'end',
    },
  },
  button: {
    '&:hover,&:active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

export const IncomeDisplay = ({ income, ...props }: IIncomeDisplay & ICardType & IIconButtonProps) => {
  return (
    <StyledIncomeDisplay className='incomeDisplay-container' {...props}>
      <div className='textConatiner'>
        <Typography className='title' variant='h6'>
          Available balance
        </Typography>
        <Typography className='price' variant='h3'>{`${income} kr`}</Typography>
        <Typography className='description' variant='textNormal'>
          Top Up Balance
        </Typography>
      </div>

      <div className='iconContainer'>
        <CardType {...props} />
        <AddButton {...props} />
      </div>
    </StyledIncomeDisplay>
  );
};
