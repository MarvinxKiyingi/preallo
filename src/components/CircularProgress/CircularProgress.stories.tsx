import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CircularProgress } from './CircularProgress';

export default {
  title: 'components/CircularProgress',
  component: CircularProgress,
  argTypes: {
    progressTextColor: {
      options: [
        'common.white',
        'common.black',
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    value: 75,
    size: 230,
    progressTextColor: 'primary',
    circularProgressColor: 'primary',
    circularProgressColorBg: 'secondary',
  },
} as ComponentMeta<typeof CircularProgress>;
const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});
