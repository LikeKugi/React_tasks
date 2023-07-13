import React, {JSX} from "react";

import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import DropInput from "../FileInput/DropInput";
import {useNavigate} from "react-router-dom";
import {useData} from "../../providers/DataProvider";

const StepThree = (): JSX.Element => {

  const navigate = useNavigate();

  const {data, setValues} = useData();

  const {handleSubmit, control} = useForm<IStepThreeForms>({defaultValues: {acceptedFiles: data.acceptedFiles}});

  const formSubmitHandler: SubmitHandler<IStepThreeForms> = ({acceptedFiles}) => {
    setValues({...data, acceptedFiles});
    navigate('/result')
  }

  return (
    <Container maxWidth={"sm"}>

      <Paper elevation={4}
             sx={{padding: 2}}>
        <Typography component={"h3"}
                    variant="h5"
                    textAlign={"center"}>Step 3</Typography>

        <Box component={"form"}
             noValidate
             autoComplete={"off"}
             onSubmit={handleSubmit(formSubmitHandler)}>
          <DropInput name="acceptedFiles"
                     control={control}/>
          <Button variant="outlined"
                  size="large"
                  type={"submit"}
                  fullWidth={true}>
            Next
          </Button>
        </Box>

      </Paper>
    </Container>
  );
}
export default StepThree;
