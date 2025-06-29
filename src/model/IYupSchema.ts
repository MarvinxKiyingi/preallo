import { object, string, ref, number } from 'yup';

export const ISignUpYupSchema = object().shape({
  firstName: string().required(),
  lastName: string(),
  email: string().required().email(),
  password: string().required().min(6),
  confirmPassword: string()
    .oneOf([ref('password')], 'passwords does not match')
    .required('confirm password is a required field'),
});

export const ISignInYupSchema = object().shape({
  email: string().required().email(),
  password: string().required(),
});

export const IPasswordResetYupSchema = object().shape({
  email: string().required().email(),
});

export const IAmountModalFormYupSchema = object().shape({
  amount: number().required().typeError('Field is required & must be a number'),
});

export const IExpenseModalFormYupSchema = object().shape({
  expense: string().required().typeError('Field is required'),
});

export const ISelectModalFormYupSchema = object().shape({
  selected: string().required('Select a month to precede'),
});

export const IAllModalFormYupSchema = object().shape({
  amount: number().required().typeError('Field is required & must be a number'),
  expense: string().required().typeError('Field is required'),
  selected: string().required().typeError('Select a month to precede'),
});

export const IAddMonthYupSchema = object().shape({
  selected: string().required('Select a month to precede'),
  amount: number().required().typeError('Field is required & must be a number'),
  needPercentage: number().typeError('Select a percentageÇ to precede'),
  savePercentage: number().typeError('Select a percentageÇ to precede'),
  wantPercentage: number().typeError('Select a percentageÇ to precede'),
});

export const IAddExpenseModalFormYupSchema = object().shape({
  amount: number().required().typeError('Field is required & must be a number'),
  expense: string().required().typeError('Field is required'),
  selected: string().required().typeError('Select a category to precede'),
  selectedTwo: string().required().typeError('Select a purpose to precede'),
  selectedThree: string().required().typeError('Select a status to precede'),
});

export const IEditExpenseModalFormYupSchema = object().shape({
  amount: number().required().typeError('Field is required & must be a number'),
  expense: string().required().typeError('Field is required'),
  selected: string().required().typeError('Select a category to precede'),
  selectedTwo: string().required().typeError('Select a purpose to precede'),
  selectedThree: string().required().typeError('Select a status to precede'),
  uuid: string().required().typeError('UUID is required'),
});

export const IGoalSettingsYupSchema = object().shape({
  needPercentage: number().required('Select a percentageÇ to precede'),
  savePercentage: number().required('Select a percentageÇ to precede'),
  wantPercentage: number().required('Select a percentageÇ to precede'),
});
