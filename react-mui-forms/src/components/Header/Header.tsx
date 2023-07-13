import {JSX} from "react";
import {AppBar, Box, Button, ButtonGroup, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = (): JSX.Element => {

  const navigate = useNavigate();

  return (
    <AppBar position={"static"}>
      <Box py={1} sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <Toolbar>
          <Typography variant="body1"
                      component={"p"}>
            React hook form with MUI
          </Typography>
        </Toolbar>

        <ButtonGroup
          variant="outlined"
                     aria-label="outlined button group"
                     color="inherit">
          <Button onClick={() => navigate("/")}>Step 1</Button>
          <Button onClick={() => navigate("/step-2")}>Step 2</Button>
          <Button onClick={() => navigate("/step-3")}>Step 3</Button>
          <Button onClick={() => navigate("/result")}>Result</Button>
        </ButtonGroup>
      </Box>

    </AppBar>
  );
}
export default Header;
