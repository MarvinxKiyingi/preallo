import { IDashboard } from '../../../model/IDashboard';
import { Grid, NoContentContainer, StyledSelect } from '../../../pages';
import { AddRow } from '../../AddRow/AddRow';
import FormContent from './FormContent';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { Dialog, Typography, styled } from '@mui/material';
import Month from './Month';

const SelectContainer = styled('div')({
  flex: '0.2',
});

const AddRowContainer = styled('div')({
  flex: '0.1',
});

const MonthContainer = styled('div')({
  flex: '3',
});

const Mobile = ({
  session,
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
  const imgUrl = session?.user?.image;
  return (
    <>
      <MobileNavigation title='Dashboard' src={imgUrl ? imgUrl : undefined} />

      <SelectContainer>
        <StyledSelect
          boxShadow
          fullWidth
          defaultValue={currentYear}
          textAlign='center'
          list={yearList}
        />
      </SelectContainer>

      <AddRowContainer>
        <AddRow
          addIsVisible
          version='secondary'
          title='Add'
          onClick={() => handleOpen()}
        />
      </AddRowContainer>

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

      <MonthContainer>
        {months?.length > 0 ? (
          <Grid ownerState={ownerState}>
            {months.map((item, indx) => (
              <Month key={indx} month={item.month} year={item.year} />
            ))}
          </Grid>
        ) : (
          <NoContentContainer>
            <Typography>Press the add button to get started</Typography>
          </NoContentContainer>
        )}
      </MonthContainer>
    </>
  );
};

export default Mobile;
