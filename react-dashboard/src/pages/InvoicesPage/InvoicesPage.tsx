import { JSX } from 'react';
import { Box } from '@mui/material';
import Invoices from '@/components/Invoices/Invoices';

const InvoicesPage = (): JSX.Element => {
  return (
    <Box p={2}>
      <Invoices />
    </Box>
  );
};
export default InvoicesPage;
