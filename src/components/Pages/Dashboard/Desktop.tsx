import Dialog from '@mui/material/Dialog';
import { IDashboard } from '../../../model/IDashboard';
import { Grid, NoContentContainer, StyledSelect } from '../../../pages';
import { AddRow } from '../../AddRow/AddRow';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import Typography from '@mui/material/Typography';
import FormContent from './FormContent';
import Month from './Month';
import RightGridContentContainer from '../../Container/RightGridContentContainer';
import { styled } from '@mui/material';

const YearSelectContainer = styled('div')({
  gridColumn: '1/-1',
  gridRow: '1/-10',
});

const MonthsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  gridColumn: '1/-1',
  gridRow: '2/-1',
}));

const Desktop = ({
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
      <DesktopNavigation />
      <ContentContainer>
        <div className='titleContainer'>
          <Typography className='pageTitle'>Dashboard</Typography>
        </div>

        <RightGridContentContainer>
          <YearSelectContainer>
            <StyledSelect
              boxShadow
              fullWidth
              defaultValue={currentYear}
              textAlign='center'
              variant='outlined'
              list={yearList}
            />
          </YearSelectContainer>

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

          <MonthsContainer>
            <AddRow
              addIsVisible
              version='secondary'
              title='Add'
              onClick={handleOpen}
            />
            {months?.length > 0 ? (
              <Grid ownerState={ownerState}>
                {months.map((item, indx) => (
                  <Month
                    key={indx}
                    month={item.month}
                    year={item.year}
                    slug={item.slug}
                  />
                ))}
              </Grid>
            ) : (
              <NoContentContainer>
                <Typography>Press the add button to get started</Typography>
              </NoContentContainer>
            )}
          </MonthsContainer>
        </RightGridContentContainer>
      </ContentContainer>
    </>
  );
};

export default Desktop;
