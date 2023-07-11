import {FC, JSX, useState} from "react";
import {Box, Button, createTheme, Grid, Paper, Rating, ThemeProvider, Typography} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useNavigate} from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 11,
          }
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 9,
          }
        },
      ]
    }
  }
})

const TourCard: FC<ITour> = ({name, duration, rating, numberOfReviews, price, image, id}): JSX.Element => {
  const [ratingTour, setRatingTour] = useState(rating);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Grid item
            xs={3}>
          <Paper elevation={3} onClick={() => navigate(`/${id}`)} sx={{cursor: "pointer"}}>
            <img className={'img'}
                 src={image}
                 alt={name}/>
            <Box px={1}>
              <Typography variant="subtitle1"
                          component={"h2"}>
                {name}
              </Typography>

              <Box sx={{display: "flex", alignItems: "center"}}>
                <AccessTimeIcon sx={{width: 13}}/>
                <Typography variant="body2"
                            component={"p"}
                            marginLeft={0.5}>
                  {duration} hours
                </Typography>
              </Box>

            </Box>

            <Box pt={3}
                 px={1}
                 sx={{
                   display: "flex",
                   alignItems: "center",
                 }}>
              <Rating name="rating-value"
                      value={ratingTour}
                      onChange={(event, newValue) => {
                        if (!newValue) return;
                        setRatingTour(newValue);
                      }}
                      precision={0.5}
                      size="small"/>
              <Typography component="legend"
                          variant="body1"
                          marginLeft={0.5}>{ratingTour}</Typography>
              <Typography component="p"
                          variant="body2"
                          marginLeft={1.5}>({numberOfReviews} reviews)</Typography>
            </Box>
            <Box py={1}>
              <Typography variant="h6"
                          component={"h3"}
                          marginLeft={1.5}>
                From C ${price}
              </Typography>
            </Box>
            <Box py={1}
                 sx={{display: "flex", justifyContent: "center"}}>
              <Button href={`/${id}`}>Learn More</Button>
            </Box>
          </Paper>
      </Grid>
    </ThemeProvider>
  );
}
export default TourCard;
