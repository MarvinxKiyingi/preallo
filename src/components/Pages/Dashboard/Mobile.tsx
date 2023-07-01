import { IDashboard } from '../../../model/IDashboard';
import { IMonths } from '../../../model/IMonth';
import { StyledSelect } from '../../../pages';
import { AddRow } from '../../AddRow/AddRow';
import { Button } from '../../Button/Button';
import FormContent from './FormContent';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { Dialog, Typography, styled } from '@mui/material';
import Link from 'next/link';

const Grid = styled('div')<{
  ownerState: { months: IMonths };
}>(({ theme, ownerState }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridAutoRows: ownerState.months.length > 2 ? '1fr' : 'max-content',
  gap: theme.spacing(2),
  height: '100%',
  overflow: 'auto',

  [`${theme.breakpoints.up('sm')} and (orientation: landscape)`]: {
    overflow: 'unset',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
  },
}));

const NoContentContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const Mobile = ({
  currentUser,
  currentYear,
  handleClose,
  handleOpen,
  handleSubmit,
  monthList,
  months,
  submitFormContentHandler,
  yearList,
  register,
  errors,
  open,
}: IDashboard) => {
  const ownerState = {
    months,
  };
  return (
    <>
      <MobileNavigation
        title='Dashboard'
        src={currentUser?.photoURL ? currentUser.photoURL : undefined}
      />

      <div>
        {yearList && (
          <StyledSelect
            boxShadow
            fullWidth
            // hasBorder={false}
            defaultValue={currentYear}
            textAlign='center'
            list={yearList}
          />
        )}
      </div>

      <AddRow
        addIsVisible
        version='secondary'
        title='Add'
        onClick={() => handleOpen()}
      />

      <Dialog onClose={() => handleClose()} open={open} maxWidth={'xs'}>
        <form onSubmit={handleSubmit(submitFormContentHandler)}>
          <FormContent
            monthList={monthList}
            handleClose={handleClose}
            register={register}
            errors={errors}
          />
        </form>
      </Dialog>

      {months?.length > 0 ? (
        <Grid ownerState={ownerState}>
          {months.map((item, indx) => (
            <Button
              key={indx}
              fullWidth
              color='primary'
              onClick={() => {}}
              variant='contained'
              version='monthPicker'
              LinkComponent={Link}
              href=''
            >
              {item.month}
            </Button>
          ))}
        </Grid>
      ) : (
        <NoContentContainer>
          <Typography>Press the add button to get started</Typography>
        </NoContentContainer>
      )}
    </>
  );
};

export default Mobile;
