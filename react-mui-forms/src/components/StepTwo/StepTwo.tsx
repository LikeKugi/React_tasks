import React, {JSX} from "react";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, Checkbox, Container, FormControlLabel, Paper, Stack, TextField, Typography} from "@mui/material";
import parsePhoneNumberFromString from "libphonenumber-js";
import {useData} from "../../providers/DataProvider";

const validateEmail = (str: string): boolean => {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return pattern.test(str);
}

const validatePhoneNumber = (str: string) : boolean => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return pattern.test(str.replace(/[\s-_]/g, ''));
}

const normalizePhoneNumber = (str: string) => {
  const phoneNumber = parsePhoneNumberFromString(str);

  if (!phoneNumber) {
    return str;
  }
  return `${phoneNumber.formatInternational()}`;
}

const StepTwo = (): JSX.Element => {
  const navigate = useNavigate();

  const {data, setValues} = useData();

  const {handleSubmit, formState: {errors}, register, setError, watch} = useForm<IStepTwoForms>({defaultValues: {email: data.email, hasPhone: data.hasPhone, phoneNumber: data.phoneNumber}});

  const hasPhoneWatcher = watch("hasPhone");

  const formSubmitHandler: SubmitHandler<IStepTwoForms> = ({email, hasPhone, phoneNumber}) => {
    let errorFlag = false;
    if (!validateEmail(email)) {
      errorFlag = true;
      setError('email', {type: "pattern", message: "Should be email"})
    }

    if (hasPhone && phoneNumber && !validatePhoneNumber(phoneNumber)) {
      errorFlag = true;
      setError('phoneNumber', {type: "pattern", message: "Should be phone"})
    }

    if (errorFlag) {
      return
    }
    setValues({...data, email, hasPhone, phoneNumber});
    navigate('/step-3')
  }
  return (
    <Container maxWidth={"sm"}>
      <Paper elevation={4}
             sx={{padding: 2}}>

        <Typography component={"h3"}
                    variant="h5"
                    textAlign={"center"}>Step 2</Typography>
        <Box component={"form"}
             noValidate
             autoComplete={"off"}
             onSubmit={handleSubmit(formSubmitHandler)}>
          <Stack spacing={2}>


            <TextField id="email"
                       fullWidth
                       label="Email:"
                       variant="standard"
                       type={"email"}
                       error={!!errors.email}
                       helperText={errors.email?.message}
                       {...register("email", {required: 'Email is required'})}/>

            <FormControlLabel control={<Checkbox {...register("hasPhone")} checked={hasPhoneWatcher}/>} label="Add phone number" />

            {
              hasPhoneWatcher && <TextField id="phoneNumber"
                        fullWidth
                        label="Phone number:"
                        variant="standard"
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber?.message}
                        {...register("phoneNumber")}
                onChange={(e) => {e.target.value = normalizePhoneNumber(e.target.value)}}/>
            }


            <Button variant="outlined"
                    size="large"
                    type={"submit"}>
              Next
            </Button>

          </Stack>
        </Box>

      </Paper>
    </Container>
  );
}
export default StepTwo;
