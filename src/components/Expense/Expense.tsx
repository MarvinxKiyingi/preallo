import { Stack, styled, Typography, useMediaQuery } from '@mui/material';
import { grey } from '../../styles/colors/grey';
import { Button } from '../Button/Button';
import { ExpenseIcon } from '../Icons';
import { theme } from '../../styles/theme/muiTheme';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

type IExpenseProps = {
  bgColor?: string;
  title: string;
  date?: string;
  amount: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  IconBgColor?: string | undefined;
  iconContainerBgColor?: string | undefined;
  light?: boolean | undefined;
};

const StyledExpense = styled(Button)<{ ownerState: IExpenseProps }>(
  ({ theme, ownerState }) => ({
    textTransform: 'unset',
    alignSelf: 'baseline',
    backgroundColor: ownerState.bgColor
      ? ownerState.bgColor
      : theme.palette.background.paper,
    // * Save for later usage
    // boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    // boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'unset',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    height: ownerState.fullHeight ? '100%' : undefined,
    width: ownerState.fullWidth ? '100%' : 334,
    gap: theme.spacing(2),

    '&:active': {
      backgroundColor: theme.palette.background.accent,
    },

    '.iconContainer': {
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      aspectRatio: '1/1',
      maxWidth: 48,
      width: '100%',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',

      '>svg>path': {
        color: ownerState.IconBgColor
          ? ownerState.IconBgColor
          : grey.shades[50],
      },
    },
    '.textContainer': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '.expenseInfoContainer': {
        display: 'flex',
        flexDirection: 'column',
        '.expense': {
          color: ownerState.light
            ? theme.palette.common.white
            : theme.palette.common.black,
          lineHeight: 'unset',
        },
        '.date': {
          color: ownerState.light ? grey.light[500] : grey.dark[500],
        },
      },

      '.price': {
        fontWeight: 600,
        color: ownerState.light
          ? theme.palette.common.white
          : theme.palette.common.black,
        textTransform: 'uppercase',
        fontsize: theme.spacing(2),
      },
    },
  })
);

export const Expense = ({
  bgColor,
  fullHeight,
  fullWidth,
  title,
  date,
  amount,
  light,
  IconBgColor,
  ...props
}: IExpenseProps) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  const ownerState = {
    bgColor,
    fullHeight,
    fullWidth,
    light,
    IconBgColor,
    title,
    amount,
  };

  return (
    <StyledExpense
      className='expenseButtonContainer'
      ownerState={ownerState}
      component='button'
      {...props}
    >
      <div className='iconContainer'>
        <ExpenseIcon />
      </div>
      <div className='textContainer'>
        <div className='expenseInfoContainer'>
          <Typography className='expense' variant='button' align='left'>
            {title}
          </Typography>

          {date && (
            <Typography className='date' variant='body2' align='left'>
              {date}
            </Typography>
          )}
        </div>
        <Stack direction='row' spacing={1 / 2}>
          <Typography className='price' variant='h6' align='right'>
            {`${amount} kr`}
          </Typography>
          {isDesktop && <MoreVertOutlinedIcon color='secondary' />}
        </Stack>
      </div>
    </StyledExpense>
  );
};
