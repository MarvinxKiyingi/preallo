import {object, string, ref} from 'yup';

export const ISignUpYupSchema = object().shape({
  firstName: string().required(),
  lastName: string(),
  email: string().required().email(),
  password: string().required().min(6),
  confirmPassword: 
    string()
    .oneOf([ref('password')], 'passwords does not match')
    .required('confirm password is a required field'),
});