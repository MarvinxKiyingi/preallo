import { styled, Theme, useMediaQuery } from '@mui/material';
import { grey } from '../../styles/colors/grey';
import { Button } from '../Button/Button';
import { theme } from '../../styles/theme/muiTheme';
import { ICategory } from '../../model/ICategory';
import ExpenseContent from './ExpenseContent';
import { IPurpose } from '../../model/IPurpose';
import { IStatus } from '../../model/IStatus';
import ExpenseDetail from './ExpenseDetail';

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
  status: IStatus;
};

const getExpenseStyles = ({
  theme,
  ownerState,
}: {
  theme: Theme;
  ownerState: IExpenseProps;
}) =>
  ({
    textTransform: 'unset',
    alignSelf: 'baseline',
    backgroundColor: ownerState.bgColor || theme.palette.background.paper,
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

      '>*': {
        flex: 1,
      },

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

      '.price-default': {
        fontWeight: 600,
        color: theme.palette.common.black,
        textTransform: 'uppercase',
        fontSize: theme.spacing(2),
      },

      '.price-detail': {
        fontWeight: 500,
        color: theme.palette.common.black,
        textTransform: 'uppercase',
        fontSize: theme.typography.body2.fontSize,
      },
    },
  } as const);

const StyledExpense = styled(Button)<{ ownerState: IExpenseProps }>(
  (props) => ({ ...getExpenseStyles(props) })
);

const StyledDetails = styled('div')<{ ownerState: IExpenseProps }>((props) => ({
  ...getExpenseStyles(props),
  '&:active': {
    backgroundColor: 'unset',
  },
}));

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
  status = 'Pending',
  ...props
}: IExpenseProps) => {
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
    amountAsString,
    stripped,
    version,
    category,
    purpose,
    status,
    ...props,
  };

  const WrapperComponent =
    version === 'detail' && isDesktop ? StyledDetails : StyledExpense;

  return (
    <WrapperComponent
      className='expenseButtonContainer'
      ownerState={ownerState}
      {...props}
    >
      <div className='textContainer'>
        {version === 'default' && (
          <ExpenseContent
            title={title}
            date={date}
            status={status}
            amountAsString={amountAsString}
          />
        )}

        {version === 'detail' && (
          <ExpenseDetail
            title={title}
            date={date}
            status={status}
            category={category}
            amountAsString={amountAsString}
          />
        )}
      </div>
    </WrapperComponent>
  );
};
