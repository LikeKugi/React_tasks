import React, {JSX, useState} from "react";
import {
  Alert,
  Button, ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useData} from "../../providers/DataProvider";
import {InsertDriveFile} from "@mui/icons-material";

const Result = (): JSX.Element => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const {data} = useData();

  return (
    <Container maxWidth={"sm"}>
      <Paper elevation={5}>
        <Stack sx={{padding: 2}}>
          <List>
            <ListItem>
              <ListItemText primary={data.firstName}/>
            </ListItem>
            <ListItem>
              <ListItemText primary={data.lastName}/>
            </ListItem>
            <ListItem>
              <ListItemText primary={data.email}/>
            </ListItem>
            {!!data.phoneNumber && <ListItem>
              <ListItemText primary={data.phoneNumber}/>
            </ListItem>}
            {!!data.acceptedFiles.length && data.acceptedFiles.map((f: File, index: number) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
          </List>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            fullWidth
            color="inherit">
            <Button onClick={() => navigate("/")}>Back</Button>
            <Button onClick={() => setShow(prevState => !prevState)}>Submit</Button>
          </ButtonGroup>
        </Stack>
      </Paper>
      {show && <Alert severity="success">Success!</Alert>}
    </Container>
  );
}
export default Result;
