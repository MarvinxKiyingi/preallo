import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardType } from './CardType';

export default {
  title: 'components/CardType',
  component: CardType,
  args: {},
} as ComponentMeta<typeof CardType>;
const Template: ComponentStory<typeof CardType> = (args) => <CardType {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardType: 'visa',
};
export const MasterCard = Template.bind({});
MasterCard.args = {
  cardType: 'mastercard',
};
