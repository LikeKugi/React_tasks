import {Box, Dialog, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import { observer } from "mobx-react-lite";
import React, {ChangeEvent, ChangeEventHandler, JSX, useCallback, useState} from "react";

interface INewTaskProps {
  open: boolean
  handleClose: () => void
}

interface IFormState {
  title: string
}

const NewTask = ({open, handleClose}: INewTaskProps): JSX.Element => {
  const [formState, setFormState] = useState<IFormState>({
    title: '',
  });

  const updateFormState = useCallback((event: ChangeEvent) => {

    console.log(event, typeof event);

    // @ts-ignore
    const {name, value} = event.target;
    console.log(name, value);

    setFormState(prevState => ({
      ...prevState,
      [name]: value ? value : '',
    }))

  }, [formState])

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a New Task</DialogTitle>
      <Box component={"form"} noValidate>
        <DialogContent style={{}}>
          <Stack spacing={2}>
            <TextField required type={"text"} label={"Title"} value={formState.title} onChange={updateFormState}></TextField>
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
export default observer(NewTask);
