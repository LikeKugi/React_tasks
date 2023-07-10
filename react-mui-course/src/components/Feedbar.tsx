import {JSX} from "react";
import {Box} from "@mui/material";
import Post from "./Post";

const Feedbar = (): JSX.Element => {
  return (
    <Box flex={4} p={2}>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
export default Feedbar;
