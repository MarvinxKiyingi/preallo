import { IIconButton } from '../AddButton/AddButton';
import { AddRow, IAddRowProps, IChipProps } from './AddRow';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'components/AddRow',
  component: AddRow,
  args: {
    title: 'Add',
    fontSizeMobile: '1.5rem',
    fontSizeDesktop: '2rem',
    size: 'small',
    renewIsVisible: true,
    addIsVisible: true,
    filter: true,
    chipsList: [
      {
        id: 'Test 1',
        activated: true,
        chipLabel: 'Test First',
      },
      {
        id: 'Test 2',
        activated: false,
        chipLabel: 'Test Second',
      },
      {
        id: 'Test 3',
        activated: false,
        chipLabel: 'Test Third',
      },
    ],
  },
};

export const Primary = (args: IAddRowProps & IChipProps & IIconButton) => (
  <AddRow {...args} />
);
Primary.args = {};
