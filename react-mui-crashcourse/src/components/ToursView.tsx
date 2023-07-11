import React, {JSX} from "react";
import {Grid} from "@mui/material";
import TourCard from "./TourCard";

const ToursView = ({tours}: {tours: ITour[] }): JSX.Element => {

  return (
    <Grid container spacing={5}>
      {tours.map((tour) => <TourCard name={tour.name}
                                          id={tour.id}
                                          rating={tour.rating}
                                          duration={tour.duration}
                                          image={tour.image}
                                          numberOfReviews={tour.numberOfReviews}
                                          price={tour.price}
                                          key={tour.id}/>)}
    </Grid>
  );
}
export default ToursView;
