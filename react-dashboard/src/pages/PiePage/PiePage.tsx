import { JSX } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import PieChart from '@/components/PieChart/PieChart';

const PiePage = (): JSX.Element => {
  return (
    <Stack spacing={2} p={2}>
      <Typography variant="h1">Pie Chart</Typography>
      <Box height={'75vh'}>
        <PieChart />
      </Box>
    </Stack>
  );
};
export default PiePage;
