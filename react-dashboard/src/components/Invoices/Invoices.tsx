import { JSX } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { tokens } from '@/context/theme';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { mockDataInvoices } from '@/services/mockData';

const Invoices = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50, },
    { field: 'name', headerName: 'Name', minWidth: 250, maxWidth: 500, },
    { field: 'email', headerName: 'Email', minWidth: 250, maxWidth: 350, },
    {
      field: 'cost',
      headerName: 'Cost',
      minWidth: 150,
      maxWidth: 350,
      renderCell: params => (<Typography color={colors.greenAccent[500]}>
        $ {params.row.cost}
      </Typography>)
    },
    { field: 'phone', headerName: 'Phone', minWidth: 250, maxWidth: 350, },
    { field: 'date', headerName: 'Date', minWidth: 150, maxWidth: 350, },
  ];

  return (
    <Stack spacing={2}>
      <Typography variant="h1">List of Invoice Balances</Typography>
      <Box flexGrow={1}
           sx={{
             '& .MuiDataGrid-root': {
               border: 'none',
             },
             '& .MuiDataGrid-cell': {
               borderBottom: 'none',
             },
             '& .name-column--cell': {
               color: colors.greenAccent[300],
             },
             '& .MuiDataGrid-columnHeaders': {
               backgroundColor: colors.blueAccent[700],
               borderBottom: 'none',
             },
             '& .MuiDataGrid-virtualScroller': {
               backgroundColor: colors.primary[400],
             },
             '& .MuiDataGrid-footerContainer': {
               borderTop: 'none',
               backgroundColor: colors.blueAccent[700],
             },
             '& .MuiCheckbox-root': {
               color: `${colors.greenAccent[200]} !important`,
             },
             '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
               color: `${colors.grey[100]} !important`
             },
           }}>
        <DataGrid columns={columns}
                  checkboxSelection
                  rows={mockDataInvoices}
                  sx={{ minHeight: '80vh', maxWidth: '100%' }}
                  components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Stack>
  );
};
export default Invoices;
