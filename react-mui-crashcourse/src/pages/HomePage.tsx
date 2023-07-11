import React from 'react';
import {cities} from "../db";
import {Container} from "@mui/material";
import CityView from "../components/CityView";


const HomePage = () => {
  return (
      <Container maxWidth={"lg"}
                 sx={{paddingTop: 5}}>
        {cities.map((city) =>
          <CityView id={city.id} name={city.name} tours={city.tours} key={city.id}/>
        )}

      </Container>
  );
};

export default HomePage;
