import {
  Box, Button,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  MenuItem,
  Select, SelectChangeEvent,
  Stack,
  TextField
} from "@mui/material";
import {observer} from "mobx-react-lite";
import React, {ChangeEvent, FormEvent, JSX, useCallback, useState} from "react";
import useStore from "../../hooks/useStore";

interface INewTaskProps {
  open: boolean
  handleClose: () => void
}

export interface IFormNewTaskState {
  title: string
  description: string
  assignee: string
}

const defaultFormState: IFormNewTaskState = {
  title: '',
  description: '',
  assignee: '-',
}

const NewTask = ({open, handleClose}: INewTaskProps): JSX.Element => {
  const [formState, setFormState] = useState<IFormNewTaskState>(defaultFormState);

  const {users, boards} = useStore();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!boards.active) return;
    boards.active.addTask(formState);
  };

  const updateFormState = useCallback((event: ChangeEvent) => {

    if (!(event.target instanceof HTMLInputElement)) return

    const {name, value} = event.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value ? value : '',
    }))

  }, [formState]);

  const closeFormHandler = () => {
    setFormState(defaultFormState);
    handleClose();
  }

  const changeAssigneeHandler = useCallback((event: SelectChangeEvent) => {
    const {value} = event.target;
    setFormState(prevState => ({
      ...prevState,
      assignee: value,
    }))
  }, [formState]);

  return (
    <Dialog open={open}
            onClose={handleClose}>
      <DialogTitle>Create a New Task</DialogTitle>
      <Box component={"form"}
           noValidate
           onSubmit={submitHandler}>
        <DialogContent style={{}}>
          <Stack spacing={2}>
            <TextField required
                       type={"text"}
                       label={"Title"}
                       name={"title"}
                       value={formState.title}
                       onChange={updateFormState}/>
            <TextField required
                       type={"text"}
                       label={"Description"}
                       name={"description"}
                       value={formState.description}
                       onChange={updateFormState}/>
            <FormControl>
              <FormLabel>Assignee</FormLabel>
              <Select value={formState.assignee}
                      name={"assignee"}
                      sx={{
                        backgroundColor: '#fefefe',
                        minWidth: 250,
                      }}
                      onChange={changeAssigneeHandler}>
                <MenuItem value={'-'}
                          disabled>
                  -
                </MenuItem>
                {users.list.map((user) => {
                  return (
                    <MenuItem id={user.id}
                              value={user.id}
                              key={user.id}>{user.name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeFormHandler}
                  color="error">Close</Button>
          <Button type={"submit"}
                  color="success">Submit</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
export default observer(NewTask);
