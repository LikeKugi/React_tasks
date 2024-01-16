import { JSX } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography, useTheme } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { tokens } from '@/context/theme';

const FaqPage = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={'20px'}>
      <Typography variant="h1">FAQ</Typography>
      <Typography variant="h2">Frequently Asked Questions Page</Typography>

      <Stack spacing={1} mt={3}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography color={colors.greenAccent[200]}
                        variant="h3">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam culpa cumque debitis
              delectus dolorum enim eveniet excepturi hic laboriosam minus modi nemo neque, odit repudiandae rerum
              suscipit vel voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography color={colors.greenAccent[200]}
                        variant="h3">
              Another important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam culpa cumque debitis
              delectus dolorum enim eveniet excepturi hic laboriosam minus modi nemo neque, odit repudiandae rerum
              suscipit vel voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography color={colors.greenAccent[200]}
                        variant="h3">
              One more important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam culpa cumque debitis
              delectus dolorum enim eveniet excepturi hic laboriosam minus modi nemo neque, odit repudiandae rerum
              suscipit vel voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography color={colors.greenAccent[200]}
                        variant="h3">
              Your favorite question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam culpa cumque debitis
              delectus dolorum enim eveniet excepturi hic laboriosam minus modi nemo neque, odit repudiandae rerum
              suscipit vel voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography color={colors.greenAccent[200]}
                        variant="h3">
              Some random question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam culpa cumque debitis
              delectus dolorum enim eveniet excepturi hic laboriosam minus modi nemo neque, odit repudiandae rerum
              suscipit vel voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography color={colors.greenAccent[300]}
                        variant="h3">
              The last question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam culpa cumque debitis
              delectus dolorum enim eveniet excepturi hic laboriosam minus modi nemo neque, odit repudiandae rerum
              suscipit vel voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};
export default FaqPage;
