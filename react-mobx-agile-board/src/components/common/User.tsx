import {JSX} from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import { toJS } from "mobx";

const User = ({user}: {user: IUser}): JSX.Element => {
  return (
    <Grid container
          alignItems={"center"} spacing={3}>
      <Grid item>
        <Avatar src={user.avatar}
                alt={user.name}/>
      </Grid>
      <Grid item>
        <Typography variant="body2">{user.name}</Typography>
      </Grid>
    </Grid>
  );
}
export default User;
