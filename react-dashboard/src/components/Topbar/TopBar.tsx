import { JSX, useContext } from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '@/context/theme';
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  Search,
  SettingsOutlined
} from '@mui/icons-material';

const TopBar = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={2}>
      <Box display={'flex'} bgcolor={colors.primary[400]} borderRadius={3} p={1}>
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search..." />
        <IconButton type={'button'}>
          <Search />
        </IconButton>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>

    </Box>
  );
};
export default TopBar;
