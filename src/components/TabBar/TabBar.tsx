import { grey } from '../../styles/colors/grey';
import { theme } from '../../styles/theme/muiTheme';
import { styled, Tab, Tabs, TabsProps as MuiTabsProps } from '@mui/material';

import React from 'react';

type ITabsProps = Pick<MuiTabsProps, 'textColor' | 'indicatorColor'>;

type ITab = {
  value: string;
  label: string;
  id: string;
};
type ITabProps = ITabsProps & {
  tabList: Array<ITab>;
  /** when true, the colors will change to better suit the dark background */
  isDarkBg?: boolean;
  /** objects filled with lighter styles suited for darker backgrounds  */
  darkBgStyles?: object | null;
};

const StyledTabs = styled(Tabs)<{
  ownerState: Pick<ITabProps, 'darkBgStyles'>;
}>(({ ownerState }) => ({
  '>div>div': {
    justifyContent: 'space-between',
  },

  ...ownerState.darkBgStyles,
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'capitalize',
  padding: theme.spacing(0.6, 1),
  minWidth: 'unset',
  minHeight: 'unset',

  ...theme.typography.caption,
}));

export const TabBar = ({ tabList, isDarkBg = false, ...props }: ITabProps) => {
  const [value, setValue] = React.useState(tabList[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const darkBgStyles = isDarkBg
    ? {
        '.MuiTab-root': {
          color: grey.shades[200],
        },
        '.MuiTab-root.Mui-selected': {
          color: theme.palette.common.white,
        },
      }
    : null;

  const ownerState = {
    darkBgStyles,
  };

  return (
    <StyledTabs
      sx={{ minHeight: 'unset' }}
      value={value}
      onChange={handleChange}
      aria-label='TabBar'
      ownerState={ownerState}
      indicatorColor={isDarkBg ? 'secondary' : 'primary'}
      {...props}
    >
      {tabList &&
        tabList.map((tab) => {
          return <StyledTab key={tab.id} value={tab.value} label={tab.label} />;
        })}
    </StyledTabs>
  );
};
