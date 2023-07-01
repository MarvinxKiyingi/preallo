import Dialog from '@mui/material/Dialog';
import { IDashboard } from '../../../model/IDashboard';
import { Grid, NoContentContainer, StyledSelect } from '../../../pages';
import { AddRow } from '../../AddRow/AddRow';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';

import { Button } from '../../Button/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import FormContent from './FormContent';

const Desktop = ({
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
      <DesktopNavigation />
      <ContentContainer>
        <div className='emptySpace' />
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
          onClick={handleOpen}
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
                href={`/month/${item.month.toLowerCase()}-${item.year}`}
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
      </ContentContainer>
    </>
  );
};

export default Desktop;
