import { JSX } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LineChart from '@/components/LineChart/LineChart';

const LinePage = (): JSX.Element => {
  return (
    <Stack spacing={2} p={2}>
      <Typography variant="h1">Line Chart</Typography>
      <Box height={'75vh'}>
        <LineChart />
      </Box>
    </Stack>
  );
};
export default LinePage;
