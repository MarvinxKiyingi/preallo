import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { IStatus } from '../../model/IStatus';
type IExpenseContent = {
  title?: string;
  date?: string;
  version?: string;
  category?: string;
  status: IStatus | undefined;
};

const ExpenseContent = ({ title, date, category, status }: IExpenseContent) => {
  return (
    <>
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

      {category && (
        <Typography className='category' variant='caption' align='left'>
          {category}
        </Typography>
      )}
    </>
  );
};

export default ExpenseContent;
