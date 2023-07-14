import {JSX, useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../store.context";
import {Button, Container, Dialog, Paper, Stack, TextField, Typography} from "@mui/material";

const AuthView = (): JSX.Element => {

  const {authStore} = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    authStore.login({email, password})
  }

  return (
    <Dialog
      open={!authenticated}>
      <Paper elevation={3}>
        <Container maxWidth={"sm"}>
          <Stack spacing={2}
                 padding={5}>
            <Typography variant="h4"
                        component={"body"}>Authentication</Typography>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined" onClick={clickHandler}>Login</Button>
          </Stack>
        </Container>
      </Paper>
    </Dialog>
  );
}
export default observer(AuthView);
