import {JSX, useState} from "react";
import {BottomNavigation, Box, Button, Container, Modal, Paper, Typography} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import TourAccordion from "../components/TourAccordion";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TourPage = (): JSX.Element => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth={"lg"}
               sx={{paddingTop: 5}}>
      <Typography variant="h3"
                  component={"h1"}>
        Explore the World in Vegas
      </Typography>

      <Box paddingTop={3}
           sx={{display: "flex"}}>
        <ImageCollage/>
      </Box>

      <Box>
        <Typography variant="h6" component={"h4"} marginBottom={3}>
          About this tour
        </Typography>

        <Typography variant="body1" component={"p"} marginBottom={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa, debitis dolore ducimus earum illo ipsa ipsum laboriosam non numquam, odio optio perferendis, qui quibusdam soluta suscipit tempora ullam voluptas.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" component={"h4"} marginBottom={3}>
          Frequently asked questions
        </Typography>

        <TourAccordion />
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels sx={{justifyContent: "space-evenly"}}>
          <Button variant="outlined"
                  href="/">
            Back
          </Button>
          <Button variant="outlined"
                  onClick={handleOpen}>
            Buy now
          </Button>
        </BottomNavigation>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom: 3}}>
            Text in a modal
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{marginBottom: 3}} label="Start date" />
            <DatePicker sx={{marginBottom: 3}} label="End date" />
          </LocalizationProvider>
        </Box>
      </Modal>

    </Container>


  );
}
export default TourPage;
