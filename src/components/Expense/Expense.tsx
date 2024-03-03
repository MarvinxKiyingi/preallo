import { Stack, styled, Typography, useMediaQuery } from '@mui/material';
import { grey } from '../../styles/colors/grey';
import { Button } from '../Button/Button';
import { ExpenseIcon } from '../Icons';
import { theme } from '../../styles/theme/muiTheme';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { ICategory } from '../../model/ICategory';
import ExpenseContent from './ExpenseContent';

export type IExpenseProps = {
  bgColor?: string;
  title: string;
  date?: string;
  amount: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  /** pass in a css string to change color */
  IconColor?: string;
  /** pass in a css string to change color */
  iconContainerBgColor?: string;
  /** If true, text color will become lighter */
  invert?: boolean;
  /** If true, background-color, border-radius, box-shadow & left and right will be removed */
  stripped?: boolean;
  /** If `"detail"`, left and right padding will be removed. And overall show a more minimal look with category in text also visible */
  version: 'default' | 'detail';
};

const StyledExpense = styled(Button)<{ ownerState: IExpenseProps }>(
  ({ theme, ownerState }) => ({
    textTransform: 'unset',
    alignSelf: 'baseline',
    backgroundColor: ownerState.bgColor
      ? ownerState.bgColor
      : theme.palette.background.paper,
    boxShadow: ownerState.stripped
      ? 'unset'
      : '0px 0px 4px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'unset',
    borderRadius: ownerState.stripped ? 'unset' : theme.spacing(2),
    padding: ownerState.stripped ? theme.spacing(2, 0) : theme.spacing(2),
    height: ownerState.fullHeight ? '100%' : undefined,
    width: ownerState.fullWidth ? '100%' : 334,
    gap: theme.spacing(2),

    '&:active': {
      backgroundColor: theme.palette.background.accent,
    },

    '.iconContainer': {
      backgroundColor: ownerState.iconContainerBgColor
        ? ownerState.iconContainerBgColor
        : theme.palette.background.default,
      display: 'flex',
      aspectRatio: '1/1',
      maxWidth: 48,
      width: '100%',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',

      '>svg>path': {
        color: ownerState.IconColor
          ? ownerState.IconColor
          : theme.palette.primary.main,
      },
    },
    '.textContainer': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '.expense': {
        color: ownerState.invert
          ? theme.palette.common.white
          : theme.palette.common.black,
        lineHeight: 'unset',
      },
      '.date': {
        color: ownerState.invert ? grey.light[500] : grey.dark[500],
      },
      '.category': {
        color: ownerState.invert ? grey.light[500] : grey.dark[500],
      },

      '.price': {
        fontWeight: 600,
        color: ownerState.invert
          ? theme.palette.common.white
          : theme.palette.common.black,
        textTransform: 'uppercase',
        fontSize: theme.spacing(2),
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
  invert = false,
  IconColor,
  stripped = false,
  version = 'default',
  category,
  iconContainerBgColor,
  ...props
}: IExpenseProps & ICategory) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  const ownerState = {
    bgColor,
    iconContainerBgColor,
    fullHeight,
    fullWidth,
    invert,
    IconColor,
    title,
    amount,
    stripped,
    version,
  };

  return (
    <StyledExpense
      className='expenseButtonContainer'
      ownerState={ownerState}
      {...props}
    >
      <div className='iconContainer'>
        <ExpenseIcon />
      </div>

      <div className='textContainer'>
        {version === 'default' && (
          <Stack display='flex' direction='column'>
            <ExpenseContent title={title} date={date} />
          </Stack>
        )}

        {version === 'detail' && (
          <>
            {!isDesktop && (
              <>
                <Stack display='flex' direction='column' alignItems='center'>
                  <ExpenseContent title={title} date={date} />
                </Stack>
                <ExpenseContent category={category} />
              </>
            )}
            {isDesktop && (
              <ExpenseContent title={title} date={date} category={category} />
            )}
          </>
        )}

        {amount && (
          <Stack direction='row' spacing={1 / 2} alignItems='center'>
            <Typography className='price' variant='h6' align='right'>
              {`${amount} kr`}
            </Typography>
            {isDesktop && <MoreVertOutlinedIcon color='secondary' />}
          </Stack>
        )}
      </div>
    </StyledExpense>
  );
};
