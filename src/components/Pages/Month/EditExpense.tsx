import { Dialog } from '@mui/material';
import { IEditExpense } from '@/model/IAddExpense';
import { FormContent } from '../../FormContent/FormContent';
import { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
import { IModalForm } from '@/model/IModalForm';

const EditExpense = ({
  open,
  handleClose,
  handleSubmit,
  register,
  errors,
  submitFormContentHandler,
  categoryList,
  purposeList,
  statusList,
  defaultAmount,
  defaultExpense,
  defaultCategory,
  defaultPurpose,
  defaultStatus,
  control,
}: IEditExpense) => {
  // Cast the register function to work with FormContent
  const castedRegister = register as unknown as UseFormRegister<IModalForm>;
  const castedErrors = errors as unknown as FieldErrors<IModalForm>;
  const castedControl = control as unknown as Control<IModalForm>;

  return (
    <Dialog onClose={() => handleClose()} open={open} maxWidth={'xs'} fullWidth>
      <form
        onSubmit={handleSubmit(submitFormContentHandler)}
        key={open ? 'edit-form' : 'closed'}
      >
        <FormContent
          edit
          title='Edit Expense'
          description='Update your expense details'
          variant='addExpense'
          amountLabel='Amount'
          expenseLabel='Expense'
          selectLabel='Category'
          selectList={categoryList}
          selectLabelTwo='Purpose'
          selectListTwo={purposeList}
          selectLabelThree='Status'
          selectListThree={statusList}
          onAgreeLabel='Update'
          onDisagreeLabel='Cancel'
          onDisagree={() => handleClose()}
          onClick={() => handleClose()}
          register={castedRegister}
          errors={castedErrors}
          control={castedControl}
          defaultAmount={defaultAmount}
          defaultExpense={defaultExpense}
          defaultCategory={defaultCategory}
          defaultPurpose={defaultPurpose}
          defaultStatus={defaultStatus}
        />
      </form>
    </Dialog>
  );
};

export default EditExpense;
