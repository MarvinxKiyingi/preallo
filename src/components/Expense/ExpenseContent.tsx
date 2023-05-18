import Typography from '@mui/material/Typography';

type IExpenseContent = {
  title?: string;
  date?: string;
  category?: string;
};

const ExpenseContent = ({ title, date, category }: IExpenseContent) => {
  return (
    <>
      {title && (
        <Typography className='expense' variant='button' align='left'>
          {title}
        </Typography>
      )}

      {date && (
        <Typography className='date' variant='body2' align='left'>
          {date}
        </Typography>
      )}

      {category && (
        <Typography className='category' variant='body2' align='left'>
          {category}
        </Typography>
      )}
    </>
  );
};

export default ExpenseContent;
