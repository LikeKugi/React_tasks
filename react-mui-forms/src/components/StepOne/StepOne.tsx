import React, {JSX} from "react";
import {Box, Button, Container, Paper, Stack, TextField, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useData} from "../../providers/DataProvider";

const validationName = (str: string): boolean => {
  const pattern = /^[a-zA-Z]+$/g
  return pattern.test(str);
}

const StepOne = (): JSX.Element => {
  const navigate = useNavigate();

  const {data, setValues} = useData();

  const {handleSubmit, formState: {errors}, register, setError} = useForm<IStepOneForms>({defaultValues: {firstName: data.firstName, lastName: data.lastName}});

  const formSubmitHandler: SubmitHandler<IStepOneForms> = ({firstName, lastName}) => {
    let errorFlag = false;
    if (!validationName(firstName)) {
      setError("firstName", {type: "pattern", message: "First name should contain only letters"})
      errorFlag = true;
    }
    if (!validationName(lastName)) {
      setError("lastName", {type: "pattern", message: "Last name should contain only letters"})
      errorFlag = true;
    }
    if (errorFlag) return;
    setValues({...data, firstName, lastName})
    navigate('/step-2');
  }

  return (
    <Container maxWidth={"sm"}>
      <Paper elevation={4}
             sx={{padding: 2}}>

        <Typography component={"h3"}
                    variant="h5"
                    textAlign={"center"}>Step 1</Typography>
        <Box component={"form"}
             noValidate
             autoComplete={"off"}
             onSubmit={handleSubmit(formSubmitHandler)}>
          <Stack spacing={2}>


            <TextField id="firstName"
                       fullWidth
                       label="First name:"
                       variant="standard"
                       error={!!errors.firstName}
                       helperText={errors.firstName?.message}
                       {...register("firstName", {required: 'First name required'})}/>

            <TextField id="lastName"
                       fullWidth
                       label="Last name:"
                       variant="standard"
                       error={!!errors.lastName}
                       helperText={errors.lastName?.message}
              {...register("lastName", {required: 'Last name required'})}/>


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
export default StepOne;

