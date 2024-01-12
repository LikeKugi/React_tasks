import { JSX } from 'react';
import { Stack, Typography } from '@mui/material';

const NotFoundPage = (): JSX.Element => {
  return (
    <main>
      <Stack spacing={2} px={2}>
        <Typography variant="h1">Oops... No information was found</Typography>
        <Typography variant="h2">Please return to Main</Typography>
      </Stack>

    </main>
  );
};
export default NotFoundPage;
