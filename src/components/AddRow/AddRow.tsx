import {
  Typography,
  styled,
  Box,
  Stack,
  Chip,
  ChipProps as MuiChipProps,
} from '@mui/material';
import React from 'react';
import { chipClasses } from '@mui/material/Chip';
import { AddButton, IIconButton } from '../AddButton/AddButton';
import { FilterIcon } from '../Icons';

// Only include
type IPickChipProps = Pick<
  MuiChipProps,
  'size' | 'color' | 'clickable' | 'label' | 'disabled'
>;
type IPickIconButton = Pick<IIconButton, 'version' | 'onClick'>;
export type IChipProps = IPickChipProps & {
  /** Can be used in a map to identify an item */
  id?: string;
  /** if true, the activated chip will change appearance */
  activated?: boolean;
  label?: string;
};

export type IAddRowProps = IPickIconButton & {
  /** list of chips content*/
  chipsList?: Array<IChipProps>;
  title: string;
  /** if true, the add button will not be visible */
  addIsVisible?: boolean;
  /** if true, the filter bar will not be visible*/
  filterIsVisible?: boolean;
  /** Callback function when a chip is clicked */
  // eslint-disable-next-line no-unused-vars
  onChipClick?: (chipId: string) => void;
};

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
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h6,
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

  [`.${chipClasses.root}`]: {
    height: 'unset',
  },
  [`.${chipClasses.label}`]: {
    ...theme.typography.overline,
    lineHeight: 'normal',
    textTransform: 'capitalize',
    padding: '4px 12px',
  },
}));

export const AddRow = ({
  title,
  addIsVisible = true,
  chipsList,
  filterIsVisible = false,
  version = 'primary',
  onClick,
  onChipClick,
  ...props
}: IAddRowProps & IChipProps & IPickIconButton) => {
  return (
    <StyledAddRowContainer className='addRowContainer'>
      <StyledAddRow className='addRow'>
        <Typography className='title' variant='h5' component={'h3'}>
          {title}
        </Typography>

        <div className='buttonGroup'>
          {addIsVisible && <AddButton version={version} onClick={onClick} />}
        </div>
      </StyledAddRow>

      {filterIsVisible && chipsList && (
        <StyledFilterBar>
          <Box display='flex' height={32} alignItems='center'>
            <FilterIcon />
          </Box>

          {chipsList && (
            <Stack direction='row' gap={2} flexWrap='wrap' alignItems='center'>
              {chipsList.map((chip) => (
                <Chip
                  key={chip.id}
                  variant={chip.activated ? 'filled' : 'outlined'}
                  color={chip.activated ? 'default' : 'default'}
                  clickable={!chip.activated ? true : false}
                  label={chip.label}
                  onClick={() => onChipClick?.(chip.id || '')}
                  {...props}
                />
              ))}
            </Stack>
          )}
        </StyledFilterBar>
      )}
    </StyledAddRowContainer>
  );
};
