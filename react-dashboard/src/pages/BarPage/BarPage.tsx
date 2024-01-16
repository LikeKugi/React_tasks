import { JSX } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import BarChart from '@/components/BarChart/BarChart';

const BarPage = (): JSX.Element => {
  return (
    <Box p={2}>
      <Stack spacing={2}>
        <Typography variant="h1">Bar Chart</Typography>
        <Typography variant="h2">Simple Bar Chart</Typography>
        <Box height={'75vh'}>
          <BarChart />
        </Box>
      </Stack>
    </Box>
  );
};
export default BarPage;
