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

export const IModalFormYupSchema = object().shape({
  amount: number().required(),
  category: string().required(),
  expense: string().required(),
});
