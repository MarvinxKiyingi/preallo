import CurrencyFormat from 'react-currency-format';

export type ITotal = {
  /** Total as string  */
  total: number;
};
export const Total = ({ total }: ITotal) => {
  return (
    <CurrencyFormat
      value={total}
      displayType={'text'}
      thousandSeparator={' '}
      decimalSeparator={','}
      thousandSpacing={'3'}
      decimalScale={2}
      fixedDecimalScale={true}
    />
  );
};
