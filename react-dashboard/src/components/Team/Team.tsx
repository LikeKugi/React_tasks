import { JSX } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { tokens } from '@/context/theme';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockDataTeam } from '@/services/mockData';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';



const Team = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 80},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'age', headerName: 'Age', width: 150, type: 'number', align: 'center', headerAlign: 'center'},
    {field: 'phone', headerName: 'Phone', flex: 1},
    {field: 'access', headerName: 'Access Level', headerAlign: 'center', flex: 1, renderCell: ({row: {access}}) => {
        return (
          <Box width={'60%'} marginInline={'auto'} p={'5px'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={
            access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
          } borderRadius={'4px'}>
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manager' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ml: '5px'}}>{access}</Typography>
          </Box>
        )
      }},
  ]

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="h1">Managing the Team Members</Typography>
        <Box sx={{
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
        }}>
          <DataGrid columns={columns} rows={mockDataTeam} />
        </Box>
      </Stack>
    </Box>
  );
};
export default Team;
