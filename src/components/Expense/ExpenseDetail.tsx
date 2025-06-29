import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { IStatus } from '../../model/IStatus';
import CurrencyFormat from 'react-currency-format';

type IExpenseDetail = {
  title?: string;
  date?: string;
  version?: string;
  category?: string;
  amountAsString?: string;
  status: IStatus | undefined;
};

const ExpenseDetail = ({
  title,
  date,
  category,
  status,
  amountAsString,
}: IExpenseDetail) => {
  return (
    <>
      {title && (
        <Typography className='expense' variant='button' align='left'>
          {title}
        </Typography>
      )}

      {status && <StatusBadge status={status} />}

      {category && (
        <Typography className='category' variant='body2' align='left'>
          {category}
        </Typography>
      )}

      {date && (
        <Typography className='date' variant='body2' align='left'>
          {date}
        </Typography>
      )}

      {amountAsString && (
        <Stack direction='row' spacing={1 / 2} alignItems='center'>
          <CurrencyFormat
            value={amountAsString}
            displayType={'text'}
            thousandSeparator={' '}
            decimalSeparator={','}
            thousandSpacing={'3'}
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={(value) => (
              <Typography className='price-detail' variant='h6' align='right'>
                {`- ${value}`}
              </Typography>
            )}
          />
        </Stack>
      )}
    </>
  );
};

export default ExpenseDetail;
