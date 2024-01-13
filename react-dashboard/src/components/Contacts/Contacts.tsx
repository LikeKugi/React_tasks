import { JSX } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { tokens } from '@/context/theme';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '@/services/mockData';

const Contacts = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', flex: 0.1},
    {field: 'registrarId', headerName: 'Registrar ID', flex: 0.5},
    {field: 'name', headerName: 'Name', flex: 0.7},
    {field: 'email', headerName: 'Email', flex: 0.7},
    {field: 'age', headerName: 'Age', flex: 0.3, type: 'number', align: 'center', headerAlign: 'center'},
    {field: 'phone', headerName: 'Phone', flex: 0.7},
    {field: 'address', headerName: 'Address', flex: 1.2},
    {field: 'city', headerName: 'City', flex: 0.7},
    {field: 'zipCode', headerName: 'ZIP Code', flex: 0.5},
  ]

  return (
    <Stack spacing={2}>
      <Typography variant="h1">Contacts</Typography>
      <Box flexGrow={1} sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`
        },
      }}>
        <DataGrid columns={columns} rows={mockDataContacts} sx={{minHeight: '80vh'}} components={{Toolbar: GridToolbar}}/>
      </Box>
    </Stack>
  );

};
export default Contacts;
