import React, {FC, JSX} from "react";
import {Box, Typography} from "@mui/material";
import ToursView from "./ToursView";

const CityView: FC<ICity> = ({name, tours}): JSX.Element => {

  return (
    <Box py={5}>
      <Typography variant={"h4"}
                  component={"h2"}
                  marginTop={5}
                  marginBottom={3}>Top {name} tours</Typography>
      <ToursView tours={tours}/>
    </Box>
  );
}
export default CityView;
