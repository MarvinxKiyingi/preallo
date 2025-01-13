import { Stack, styled, Typography } from '@mui/material';
import { grey } from '../../styles/colors/grey';
import { Button } from '../Button/Button';
import { theme } from '../../styles/theme/muiTheme';
import { ICategory } from '../../model/ICategory';
import ExpenseContent from './ExpenseContent';
import CurrencyFormat from 'react-currency-format';
import { PurposePill } from '../PurposePill/PurposePill';
import { IPurpose } from '@/model/IPurpose';

export type IExpenseProps = {
  bgColor?: string;
  title: string;
  date?: string;
  amount: number;
  amountAsString: string;
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
  version?: 'default' | 'detail';
  category: ICategory;
  purpose: IPurpose;
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
    padding: ownerState.stripped ? theme.spacing(2, 0) : theme.spacing(2, 3),
    height: ownerState.fullHeight ? '100%' : undefined,
    width: ownerState.fullWidth ? '100%' : 334,
    gap: theme.spacing(2),

    '&:active': {
      backgroundColor: theme.palette.background.accent,
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
        color: theme.palette.common.black,
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
  amountAsString,
  invert = false,
  IconColor,
  stripped = false,
  version = 'default',
  category,
  iconContainerBgColor,
  purpose = 'Need',
  ...props
}: IExpenseProps) => {
  const ownerState = {
    bgColor,
    iconContainerBgColor,
    fullHeight,
    fullWidth,
    invert,
    IconColor,
    title,
    amount,
    amountAsString,
    stripped,
    version,
    category,
    purpose,
    ...props,
  };

  return (
    <StyledExpense
      className='expenseButtonContainer'
      ownerState={ownerState}
      {...props}
    >
      <div className='textContainer'>
        {version === 'default' && (
          <Stack direction='row' gap={theme.spacing()}>
            <Stack direction={'column'}>
              <ExpenseContent title={title} date={date} />
            </Stack>
            <Stack justifyContent={'end'}>
              <PurposePill
                className={purpose.toString().toLocaleLowerCase()}
                text={purpose}
              />
            </Stack>
          </Stack>
        )}

        {version === 'detail' && (
          <>
            <ExpenseContent title={title} date={date} category={category} />
          </>
        )}

        {amountAsString && (
          <Stack direction='row' spacing={1 / 2} alignItems='center'>
            <CurrencyFormat
              value={amountAsString}
              displayType={'text'}
              thousandSeparator={' '}
              decimalSeparator={','}
              thousandSpacing={'3'}
              renderText={(value) => (
                <Typography className='price' variant='h6' align='right'>
                  {`- ${value}`}
                </Typography>
              )}
            />
          </Stack>
        )}
      </div>
    </StyledExpense>
  );
};
