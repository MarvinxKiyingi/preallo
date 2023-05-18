import { Box, styled, Typography } from '@mui/material';
import { grey } from '../../styles/colors/grey';
import { theme } from '../../styles/theme/muiTheme';
import { AddButton } from '../AddButton/AddButton';
import useMediaQuery from '@mui/material/useMediaQuery';

export type ISalaryDisplayProps = {
  title: string;
  amount: string;
  invert?: boolean;
  onClick?: () => void;
};

const Title = styled(Typography)<{ ownerState: ISalaryDisplayProps }>(
  ({ theme, ownerState }) => ({
    ...theme.typography.subtitle1,
    color: ownerState.invert ? grey.light[100] : grey.dark[100],

    [theme.breakpoints.up('md')]: {
      ...theme.typography.h4,
    },
  })
);

const Salary = styled(Typography)<{ ownerState: ISalaryDisplayProps }>(
  ({ theme, ownerState }) => ({
    ...theme.typography.h4,
    textTransform: 'uppercase',
    margin: 'unset',
    color: ownerState.invert
      ? theme.palette.common.white
      : theme.palette.common.black,

    [theme.breakpoints.up('md')]: {
      ...theme.typography.h2,
    },
  })
);

export const SalaryDisplay = ({
  title,
  amount,
  onClick,
  invert = false,
  ...props
}: ISalaryDisplayProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ownerState = {
    title,
    amount,
    onClick,
    invert,
    ...props,
  };

  return (
    <Box display='flex' alignItems='center'>
      <Box
        display='flex'
        flexDirection='column'
        width='100%'
        alignItems='center'
      >
        <Title as='span' ownerState={ownerState}>
          {title}
        </Title>
        <Salary as='h3' ownerState={ownerState}>{`${amount} kr`}</Salary>
      </Box>

      {isMobile && (
        <Box p={theme.spacing(0, 2, 0, 0)}>
          <AddButton
            hasBgColor
            color='inherit'
            version='primary'
            onClick={onClick}
          />
        </Box>
      )}
    </Box>
  );
};
