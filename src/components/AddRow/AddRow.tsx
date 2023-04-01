import { Typography, styled, Box, Stack, Chip, ChipProps } from '@mui/material';
import React from 'react';
import { AddButton } from '../AddButton/AddButton';
import { IIconButtonProps } from '../IconButton/IconButton';
import { FilterIcon } from '../Icons';

export interface IChip {
  id: string;
  chipLabel: string;
  activated: boolean;
}

export interface IAddRowProps extends IIconButtonProps {
  title: string;
  addIsVisible?: boolean;
  renewIsVisible?: boolean;
  filter: boolean;
  chipsList: Array<IChip>;
}
export interface IChipProps extends ChipProps {
  id: string;
  chipLabel: string;
  activated?: boolean;
  onClick?: () => void;
}

export const StyledAddRowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
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

export const AddRow = ({ title, addIsVisible, chipsList, filter, ...props }: IAddRowProps & IChipProps) => {
  return (
    <StyledAddRowContainer className='addRowContainer'>
      <StyledAddRow className='addRow'>
        <Typography className='title' variant='h5' component={'h3'}>
          {title}
        </Typography>

        <div className='buttonGroup'>{addIsVisible && <AddButton {...props} />}</div>
      </StyledAddRow>

      {filter && (
        <StyledFilterBar>
          <Box display='flex' height={32} alignItems='center'>
            <FilterIcon />
          </Box>
          <Stack direction='row' gap={2} flexWrap='wrap'>
            {chipsList.map((chip) => (
              <Chip
                key={chip.id}
                label={chip.chipLabel}
                variant={chip.activated ? 'filled' : 'outlined'}
                color={chip.activated ? 'default' : 'default'}
                clickable={!chip.activated ? true : false}
              />
            ))}
          </Stack>
        </StyledFilterBar>
      )}
    </StyledAddRowContainer>
  );
};
