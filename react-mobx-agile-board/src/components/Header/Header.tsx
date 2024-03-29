import React, {JSX, useState} from "react";
import {observer} from "mobx-react-lite";
import {AppBar, Box, Grid, MenuItem, Select, SelectChangeEvent, Toolbar, Typography} from "@mui/material";
import useStore from "../../hooks/useStore";
import User from "../common/User";
import NewTask from "../Dashboard/NewTask";

const Header = (): JSX.Element => {
  const {boards, users} = useStore();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    if (!boards.active) return;
    setOpenDialog(true);
  }

  const changeBoardHandler = (event: SelectChangeEvent) => {
    const {value} = event.target;

    boards.selectBoard(value);
  }
  return (
    <>
      <NewTask open={openDialog}
               handleClose={() => {
                 setOpenDialog(false)
               }}></NewTask>
      <AppBar position={"static"}>
        <Toolbar variant="dense">
          <Grid container
                justifyContent={"space-between"}
                alignItems={"center"}>
            <Grid item>
              <Grid container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    spacing={3}>
                <Grid item>
                  <Typography variant="h5">
                    Dashboard
                  </Typography>
                </Grid>
                <Grid item>
                  <Box component={"form"}
                       noValidate>
                    <Select value={boards?.active?.id || ''}
                            sx={{
                              backgroundColor: '#fefefe',
                              minWidth: 250,
                            }}
                            onChange={changeBoardHandler}>
                      <MenuItem value={''}
                                disabled>
                        -
                      </MenuItem>
                      {boards.list.map((board) => {
                        return (
                          <MenuItem id={board.id}
                                    value={board.id}
                                    key={board.id}>{board.title}</MenuItem>
                        )
                      })}
                    </Select>
                  </Box>
                </Grid>
                {boards.active && <Grid item>
                  <Typography onClick={handleOpenDialog}
                              variant="button"
                              sx={{cursor: "pointer"}}>New Task</Typography>
                </Grid>}
              </Grid>
            </Grid>
            {users.me && <Grid item>
              <User user={users.me}/>
            </Grid>}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default observer(Header);
