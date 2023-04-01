import { styled, Tab, Tabs, TabsProps as MuiTabsProps } from '@mui/material';

import React from 'react';

type ITabsProps = Pick<MuiTabsProps, 'textColor' | 'indicatorColor'>;

interface ITab {
  value: string;
  label: string;
  id: string;
}
interface ITabProps extends ITabsProps {
  tabList: Array<ITab>;
}

const StyledTabs = styled(Tabs)({
  '>div>div': {
    justifyContent: 'space-between',
  },
});
const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'capitalize',
  padding: theme.spacing(0.6, 1),
  minWidth: 'unset',
  minHeight: 'unset',
  ...theme.typography.caption,
}));

export const TabBar = ({ tabList, ...props }: ITabProps) => {
  const [value, setValue] = React.useState(tabList[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledTabs sx={{ minHeight: 'unset' }} value={value} onChange={handleChange} {...props} aria-label='TabBar'>
      {tabList &&
        tabList.map((tab) => {
          return <StyledTab key={tab.id} value={tab.value} label={tab.label} />;
        })}
    </StyledTabs>
  );
};
