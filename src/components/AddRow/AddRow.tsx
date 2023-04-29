import {
  Typography,
  styled,
  Box,
  Stack,
  Chip,
  ChipProps as MuiChipProps,
} from '@mui/material';
import React from 'react';
import { AddButton, IIconButton } from '../AddButton/AddButton';
import { FilterIcon } from '../Icons';

// Only include
type IPickChipProps = Pick<
  MuiChipProps,
  'size' | 'color' | 'clickable' | 'label' | 'disabled'
>;
type IPickIconButton = Pick<IIconButton, 'version'>;
export interface IChipProps extends IPickChipProps {
  id?: string;
  activated?: boolean;
  label?: string;
}

export interface IAddRowProps extends IPickIconButton {
  title: string;
  addIsVisible?: boolean;
  filter: boolean;
  chipsList: Array<IChipProps>;
}

export const StyledAddRowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(),
  color: theme.palette.common.black,
}));

export const StyledAddRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  color: theme.palette.common.black,

  '.title': {
    ...theme.typography.h6,
    fontWeight: 600,
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h5,
      fontWeight: 600,
    },
  },

  '.buttonGroup': {
    display: 'flex',
    gap: theme.spacing(),
  },
}));

export const StyledFilterBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 1),
  gap: theme.spacing(2),

  '.chip': {
    fontSize: theme.typography.overline.fontSize,

    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));

export const AddRow = ({
  title,
  addIsVisible,
  chipsList,
  filter,
  version,
  ...props
}: IAddRowProps & IChipProps & IPickIconButton) => {
  return (
    <StyledAddRowContainer className='addRowContainer'>
      <StyledAddRow className='addRow'>
        <Typography className='title' variant='h5' component={'h3'}>
          {title}
        </Typography>

        <div className='buttonGroup'>
          {addIsVisible && <AddButton version={version} />}
        </div>
      </StyledAddRow>

      {filter && (
        <StyledFilterBar>
          <Box display='flex' height={32} alignItems='center'>
            <FilterIcon />
          </Box>
          <Stack direction='row' gap={2} flexWrap='wrap' alignItems='center'>
            {chipsList.map((chip) => (
              <Chip
                key={chip.id}
                variant={chip.activated ? 'filled' : 'outlined'}
                color={chip.activated ? 'default' : 'default'}
                clickable={!chip.activated ? true : false}
                label={chip.label}
                {...props}
              />
            ))}
          </Stack>
        </StyledFilterBar>
      )}
    </StyledAddRowContainer>
  );
};
