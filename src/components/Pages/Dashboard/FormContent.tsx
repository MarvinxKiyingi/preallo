import React from 'react';
import { FormContent as Content } from '../../FormContent/FormContent';
import { IDashboardFormContent } from '../../../model/IDashboardFormContent';

function FormContent({
  monthList,
  handleClose,
  register,
  errors,
}: IDashboardFormContent) {
  return (
    <Content
      add
      title='Add Month'
      description='Pick a month to add, you can only add existing and coming months.'
      variant='select'
      selectLabel='Month'
      selectList={monthList}
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
