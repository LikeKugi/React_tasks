import {JSX} from "react";
import {Box} from "@mui/material";

const Sidebar = (): JSX.Element => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm:"block"}}}>
      Sidebar
    </Box>
  );
}
export default Sidebar;
