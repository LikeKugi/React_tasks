import { JSX } from 'react';
import { Box } from '@mui/material';
import Calendar from '@/components/Calendar/Calendar';

const CalendarPage = (): JSX.Element => {
  return (
    <Box p={2}>
      <Calendar />
    </Box>
  );
};
export default CalendarPage;
