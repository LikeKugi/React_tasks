import { JSX, useState } from 'react';
import { Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { tokens } from '@/context/theme';
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined, HelpOutlined,
  HomeOutlined,
  MenuOutlined,
  PeopleOutline,
  Person, Person2Outlined, PieChartOutline,
  ReceiptOutlined, TimelineOutlined
} from '@mui/icons-material';
import { Menu, MenuItem, Sidebar, sidebarClasses } from 'react-pro-sidebar';
import SidebarItem from '@/components/SideBarItem/SidebarItem';
import { RoutesConstants } from '@/routes';
import { useNavigate } from 'react-router-dom';

const SideBar = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState<RoutesConstants>(RoutesConstants.INDEX);

  const navigate = useNavigate();

  const handleSelect = (arg: RoutesConstants) => {
    setSelected(arg);
    navigate(arg);
  };

  return (
    <Box
    >
      <Sidebar collapsed={isCollapsed}
               rootStyles={{
                 height: '100%',
                 borderColor: 'transparent',
                 [`.${sidebarClasses.container}`]: {
                   backgroundColor: colors.primary[400],
                 },
               }}>
        <Menu menuItemStyles={{
          button: {
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
            [`&.ps-active`]: {
              backgroundColor: colors.blueAccent[900],
              color: '#b6c8d9',
            },
            ['&:hover']: {
              backgroundColor: colors.primary[900],
            }
          }
        }}>
          <MenuItem
            onClick={() => setIsCollapsed(prevState => !prevState)}
            icon={isCollapsed ? <MenuOutlined/> : undefined}
            style={{
              margin: '10px 0 20px 0',
            }}
          >
            {!isCollapsed && (
              <Box display={'flex'}
                   justifyContent={'space-between'}
                   alignItems={'center'}
                   ml={'15px'}>
                <Typography variant="h3"
                            color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton>
                  <MenuOutlined/>
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb={2.5}>
              <Box display={'flex'}
                   justifyContent={'center'}
                   alignItems={'center'}
                   mb={1.5}>
                <Avatar>
                  <Person color="primary"/>
                </Avatar>
              </Box>
              <Box textAlign={'center'}>
                <Typography variant="body1"
                            color={colors.primary[100]}
                            fontWeight={'bold'}>User Name</Typography>
                <Typography variant="body2"
                            color={colors.greenAccent[300]}>User Role</Typography>
              </Box>
            </Box>
          )}
          <Stack paddingInlineStart={isCollapsed ? undefined : '5%'}
                 spacing={1}>
            <SidebarItem title="Dashboard"
                         to={RoutesConstants.INDEX}
                         icon={<HomeOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <Typography variant="body2"
                        color={colors.grey[300]}
                        paddingInlineStart={'7%'}>Data</Typography>
            <SidebarItem title="Manage Team"
                         to={RoutesConstants.TEAM}
                         icon={<PeopleOutline/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <SidebarItem title="Contacts information"
                         to={RoutesConstants.CONTACTS}
                         icon={<ContactsOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <SidebarItem title="Invoices Balances"
                         to={RoutesConstants.INVOICES}
                         icon={<ReceiptOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <Typography variant="body2"
                        color={colors.grey[300]}
                        paddingInlineStart={'7%'}>Pages</Typography>
            <SidebarItem title="Profile Form"
                         to={RoutesConstants.FORM}
                         icon={<Person2Outlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <SidebarItem title="Calendar"
                         to={RoutesConstants.CALENDAR}
                         icon={<CalendarTodayOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <SidebarItem title="FAQ Page"
                         to={RoutesConstants.FAQ}
                         icon={<HelpOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <Typography variant="body2"
                        color={colors.grey[300]}
                        paddingInlineStart={'7%'}>Charts</Typography>
            <SidebarItem title="Bar Chart"
                         to={RoutesConstants.BAR}
                         icon={<BarChartOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <SidebarItem title="Pie Chart"
                         to={RoutesConstants.PIE}
                         icon={<PieChartOutline/>}
                         selected={selected}
                         setSelected={handleSelect}/>
            <SidebarItem title="Line Chart"
                         to={RoutesConstants.LINE}
                         icon={<TimelineOutlined/>}
                         selected={selected}
                         setSelected={handleSelect}/>
          </Stack>
        </Menu>
      </Sidebar>

    </Box>
  );
};

export default SideBar;
