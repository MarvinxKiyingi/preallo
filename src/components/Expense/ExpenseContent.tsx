import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { IStatus } from '../../model/IStatus';
import CurrencyFormat from 'react-currency-format';
type IExpenseContent = {
  title?: string;
  date?: string;
  version?: string;
  amountAsString?: string;
  status: IStatus | undefined;
};

const ExpenseContent = ({
  title,
  date,
  amountAsString,
  status,
}: IExpenseContent) => {
  return (
    <>
      <Stack
        direction='row'
        gap={theme.spacing()}
        justifyContent='space-between'
        width='100%'
      >
        <Stack direction={'column'}>
          {title && (
            <Typography className='expense' variant='button' align='left'>
              {title}
            </Typography>
          )}

          {date && (
            <Stack flexDirection='row' gap={theme.spacing()}>
              <Typography className='date' variant='caption' align='left'>
                {date}
              </Typography>
              {status && <StatusBadge status={status} />}
            </Stack>
          )}
        </Stack>

        {amountAsString && (
          <Stack direction='row' spacing={1 / 2} alignItems='center'>
            <CurrencyFormat
              value={amountAsString}
              displayType={'text'}
              thousandSeparator={' '}
              decimalSeparator={','}
              thousandSpacing={'3'}
              renderText={(value) => (
                <Typography
                  className='price-default'
                  variant='h6'
                  align='right'
                >
                  {`- ${value}`}
                </Typography>
              )}
            />
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default ExpenseContent;
