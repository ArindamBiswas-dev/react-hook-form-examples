import * as yup from 'yup';

const fieldRequired = `This field is Required!`;
const canOnlyContain = `can only contains alphabates`;
const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  lastName: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Last Name ${canOnlyContain}`),
  email: yup
    .string()
    .email('Email is not valid')
    .trim()
    .required(fieldRequired),
  password: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      `Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character required`
    ),
  passwordConfirm: yup
    .string()
    .label('Password Confirm')
    .required(fieldRequired)
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

export { schema };
