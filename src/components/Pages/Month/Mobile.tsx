import { styled } from '@mui/material';
import { IMonthPage } from '../../../model/IMonthPage';
import MobileWrapper from '../../Container/MobileWrapper';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { TabBar } from '@/components/TabBar/TabBar';
import { SalaryDisplay } from '@/components/SalaryDisplay/SalaryDisplay';
import CurrencyFormat from 'react-currency-format';
import { BudgetDisplay } from '@/components/BudgetDisplay/BudgetDisplay';

const HeaderSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(3),
  gap: theme.spacing(3),
  background: theme.palette.primary.main,

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    gap: theme.spacing(5),
  },
}));

const BudgetOverviewSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(5),
  },
}));

const Mobile = ({ session, month, year, salary }: IMonthPage) => {
  const imgUrl = session?.user?.image;
  const salaryAsNumber = Number(salary);

  const tabBarList = [
    { id: 'month', label: 'month', value: 'month' },
    { id: 'subscriptions', label: 'subscriptions', value: 'subscriptions' },
    { id: 'recurring', label: 'recurring', value: 'recurring' },
  ];

  return (
    <MobileWrapper>
      <HeaderSection>
        <MobileNavigation
          title={month}
          src={imgUrl ? imgUrl : undefined}
          isDarkBg
        />

        <TabBar tabList={tabBarList} isDarkBg />

        <BudgetOverviewSection>
          <SalaryDisplay title='Salary' amount={salaryAsNumber} invert />

          <BudgetDisplay
            amount={salaryAsNumber}
            sx={{ pt: 'unset' }}
            days={25}
            viewProgress
            fullWidth
          />
        </BudgetOverviewSection>
      </HeaderSection>
      <div>
        <h1>{month}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </div>
    </MobileWrapper>
  );
};

export default Mobile;
