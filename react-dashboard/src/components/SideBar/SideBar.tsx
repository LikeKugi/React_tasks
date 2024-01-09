import { JSX, useState } from 'react';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '@/context/theme';
import { MenuOutlined, Person } from '@mui/icons-material';
import { Menu, MenuItem, Sidebar, sidebarClasses } from 'react-pro-sidebar';

const SideBar = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('DashBoard')
  return (
    <Box
    >
      <Sidebar rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.blueAccent[900],
        },
      }}>
        <Menu menuItemStyles={{
          button: {
            backgroundColor: colors.blueAccent[800],
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
            ['&:hover']: {
              backgroundColor: colors.primary[900],
            }
          }
        }}>
          <MenuItem
            onClick={() => setIsCollapsed(prevState => !prevState)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: '10px 0 20px 0',
            }}
          >
            {!isCollapsed && (
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} ml={'15px'}>
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(prevState => !prevState)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb={2.5}>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={1.5}>
                <Avatar>
                  <Person />
                </Avatar>
              </Box>
              <Box textAlign={'center'}>
                <Typography variant="h2" color={colors.grey[100]} fontWeight={'bold'}>User Name</Typography>
                <Typography>User Role</Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>

    </Box>
  );
};

export default SideBar;
