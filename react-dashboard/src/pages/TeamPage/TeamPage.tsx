import { JSX } from 'react';
import Team from '@/components/Team/Team';
import { Box } from '@mui/material';

const TeamPage = (): JSX.Element => {
  return (
    <Box p={2}>
      <Team />
    </Box>
  );
};
export default TeamPage;
