import { IDashboard } from '../../../model/IDashboard';
import { Grid, NoContentContainer, StyledSelect } from '../../../pages';
import { AddRow } from '../../AddRow/AddRow';
import { Button } from '../../Button/Button';
import FormContent from './FormContent';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { Dialog, Typography } from '@mui/material';
import Link from 'next/link';

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
