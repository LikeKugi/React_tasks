import { JSX } from 'react';
import { Box } from '@mui/material';
import Contacts from '@/components/Contacts/Contacts';

const ContactsPage = (): JSX.Element => {
  return (
    <Box p={2}>
      <Contacts />
    </Box>
  );
};
export default ContactsPage;
