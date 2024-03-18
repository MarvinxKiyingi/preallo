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
  },
}));

const BudgetOverview = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(5),
  },
}));

const AddExpense = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(),

  [theme.breakpoints.up('sm')]: {},
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

        <BudgetOverview>
          <BudgetDisplay
            progressValue={50}
            budget={4566}
            salary={salaryAsNumber}
            daysUntilPayday={25}
            fullWidth
          />
        </BudgetOverview>
      </HeaderSection>
      <div>
        <AddExpense></AddExpense>
      </div>
    </MobileWrapper>
  );
};

export default Mobile;
