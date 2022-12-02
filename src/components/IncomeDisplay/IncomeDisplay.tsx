import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { AddButton } from '../AddButton/AddButton';
import { CardType, ICardType } from '../CardType/CardType';
import { IIconButtonProps } from '../IconButton/IconButton';

export type IIncomeDisplayProps = {
  income?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

const StyledIncomeDisplay = styled(Box)<{ ownerState: IIncomeDisplayProps }>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2),
  display: 'flex',
  width: ownerState.fullWidth ? '100%' : '334px',
  height: ownerState.fullHeight ? '100%' : '165px',
  [theme.breakpoints.up('lg')]: {
    width: ownerState.fullWidth ? '100%' : '487.53px',
    height: ownerState.fullHeight ? '100%' : '246px',
    padding: theme.spacing(3),
  },

  '.textConatiner': {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    '>*+*': {
      paddingTop: theme.spacing(),
    },
    '>:last-child': {
      marginTop: 'auto',
    },
    '.title': {
      [theme.breakpoints.up('lg')]: {
        // @ts-ignore
        ...theme.typography.h4,
      },
    },
    '.price': {
      fontWeight: 600,
      [theme.breakpoints.up('lg')]: {
        // @ts-ignore
        ...theme.typography.h1,
        fontWeight: 600,
      },
    },
    '.description': {
      [theme.breakpoints.up('lg')]: {
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
    '.cardType': {
      width: '100%',
      maxWidth: '80%',
    },
    '.addButton-container': {
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(2),
      },
    },
  },
  button: {
    '&:hover,&:active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

export const IncomeDisplay = ({ income, fullWidth, ...props }: IIncomeDisplayProps & ICardType & IIconButtonProps) => {
  const ownerState = {
    fullWidth,
  };
  return (
    <StyledIncomeDisplay className='incomeDisplay-container' ownerState={ownerState} {...props}>
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
