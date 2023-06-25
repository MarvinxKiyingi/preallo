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
  amount: number()
    .required()
    .typeError('Field is required and must be a number'),
});

export const IExpenseModalFormYupSchema = object().shape({
  expense: string().required().typeError('Field is required'),
});

export const ISelectModalFormYupSchema = object().shape({
  selected: string().required('Choose a month to precede'),
});

export const IAllModalFormYupSchema = object().shape({
  amount: number()
    .required()
    .typeError('Field is required and must be a number'),
  expense: string().required().typeError('Field is required'),
  selected: string().required().typeError('Choose a month to precede'),
});
