import {JSX} from "react";
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";
import Header from "../components/Header/Header";

const RootPage = (): JSX.Element => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Container maxWidth={"lg"} sx={{paddingTop: 8}}>
        <Outlet />
      </Container>
    </>
  );
}
export default RootPage;
