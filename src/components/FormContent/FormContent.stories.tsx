import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormContent } from './FormContent';

export default {
  title: 'components/Form/FormContent',
  component: FormContent,
  args: {
    variant: 'all',
    title: 'Add',
    description:
      'I live my day as if it was the last Live my day as if there was no past Doin it all night, all summer Doin it the way I wanna',
    onAgreeLabel: 'Action',
    onDisagreeLabel: 'Cancel',
    categoryList: ['Category', 'Car', 'Transportation'],
    amountLabel: 'Amount',
    expenseLabel: 'Expense',
  },
} as ComponentMeta<typeof FormContent>;

const Template: ComponentStory<typeof FormContent> = (args) => <FormContent {...args} />;

export const Default = Template.bind({});

export const Amount = Template.bind({});
Amount.args = {
  variant: 'amount',
};

export const Expense = Template.bind({});
Expense.args = {
  variant: 'expense',
};

export const Remove = Template.bind({});
Remove;
