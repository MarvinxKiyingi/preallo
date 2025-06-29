import React from 'react';
import { FormContent as Content } from '../../FormContent/FormContent';
import { IMonthlyExpenseFormContent } from '@/model/IMonthlyExpenseFormContent';

function FormContent({
  categoryList,
  purposeList,
  statusList,
  handleClose,
  register,
  errors,
}: IMonthlyExpenseFormContent) {
  return (
    <Content
      add
      title='Add Expense'
      description='Type in your expense and categories it'
      variant='addExpense'
      amountLabel='Amount'
      expenseLabel='Expense'
      selectLabel='Category'
      selectList={categoryList}
      selectLabelTwo='Purpose'
      selectListTwo={purposeList}
      selectLabelThree='Status'
      selectListThree={statusList}
      onAgreeLabel='Add'
      onDisagreeLabel='Cancel'
      onDisagree={() => handleClose()}
      onClick={() => handleClose()}
      register={register}
      errors={errors}
    />
  );
}

export default FormContent;
