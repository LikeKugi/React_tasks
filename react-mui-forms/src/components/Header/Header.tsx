import {JSX} from "react";
import {AppBar, Box, Button, ButtonGroup, Toolbar, Typography} from "@mui/material";

const Header = (): JSX.Element => {
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
          <Button href="/">Step 1</Button>
          <Button href="/step-2">Step 2</Button>
          <Button href="/step-3">Step 3</Button>
          <Button href="/result">Result</Button>
        </ButtonGroup>
      </Box>

    </AppBar>
  );
}
export default Header;
