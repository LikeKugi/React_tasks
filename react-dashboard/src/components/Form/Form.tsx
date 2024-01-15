import { JSX } from 'react';
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const userSchema = yup.object({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  email: yup.string().email('Invalid Email').required('Email Required'),
  contact: yup.string().matches(phoneRegex, 'Phone number should be valid').required('Contact Required'),
  address1: yup.string().required('Address Required'),
  address2: yup.string().required('Address Required'),
});

const Form = (): JSX.Element => {
  const isNonMobile = useMediaQuery('min-width:600px');

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m={'20px'}>
      <Typography variant="h1">Create User</Typography>
      <Typography variant="h2">Create a New User Profile</Typography>

      <Formik initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={userSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}
                style={{ margin: '1rem 0', }}>
            <Box display={'grid'}
                 gap={'30px'}
                 gridTemplateColumns={'repeat(4, minmax(0, 1fr))'}
                 sx={{
                   '& > .full': { gridColumn: isNonMobile ? undefined : 'span 4' },
                   '& > .semi': { gridColumn: isNonMobile ? undefined : 'span 2' },
                 }}>
              <TextField className="semi"
                         fullWidth
                         variant={'filled'}
                         type={'text'}
                         label={'First Name'}
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.firstName}
                         name="firstName"
                         error={!!touched.firstName && !!errors.firstName}
                         helperText={touched.firstName && errors.firstName}/>
              <TextField className="semi"
                         fullWidth
                         variant={'filled'}
                         type={'text'}
                         label={'Last Name'}
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.lastName}
                         name="lastName"
                         error={!!touched.lastName && !!errors.lastName}
                         helperText={touched.lastName && errors.lastName}/>
              <TextField className="full"
                         fullWidth
                         variant={'filled'}
                         type={'text'}
                         label={'Email'}
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.email}
                         name="email"
                         error={!!touched.email && !!errors.email}
                         helperText={touched.email && errors.email}/>
              <TextField className="full"
                         fullWidth
                         variant={'filled'}
                         type={'text'}
                         label={'Contact Number'}
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.contact}
                         name="contact"
                         error={!!touched.contact && !!errors.contact}
                         helperText={touched.contact && errors.contact}/>
              <TextField className="full"
                         fullWidth
                         variant={'filled'}
                         type={'text'}
                         label={'Address 1'}
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.address1}
                         name="address1"
                         error={!!touched.address1 && !!errors.address1}
                         helperText={touched.address1 && errors.address1}/>
              <TextField className="full"
                         fullWidth
                         variant={'filled'}
                         type={'text'}
                         label={'Address 2'}
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.address2}
                         name="address2"
                         error={!!touched.address2 && !!errors.address2}
                         helperText={touched.address2 && errors.address2}/>
            </Box>
            <Box display={'flex'} justifyContent={'end'} mt={'20px'}>
              <Button type={'submit'} color="secondary" variant="contained">Create New User</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default Form;
