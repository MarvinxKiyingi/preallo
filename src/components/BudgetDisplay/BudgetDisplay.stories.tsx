import { BudgetDisplay, IBudgetDisplay } from './BudgetDisplay';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'components/BudgetDisplay',
  component: BudgetDisplay,
  args: {
    days: 25,
    amount: 2.478,
    progressValue: 60,
    color: 'secondary',
    version: 'primary',
  },
};

export const Primary = (args: IBudgetDisplay) => <BudgetDisplay {...args} />;

Primary.args = {};

export const WithProgress = (args: IBudgetDisplay) => (
  <BudgetDisplay {...args} />
);

WithProgress.args = {
  viewProgress: true,
  variant: 'determinate',
};

export const Secondary = (args: IBudgetDisplay) => <BudgetDisplay {...args} />;

Secondary.args = {
  title: 'Budget',
  version: 'secondary',
};
