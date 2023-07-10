import {FC, JSX} from "react";
import {Box, List, ListItem, ListItemButton, PaletteMode, Switch} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import {
  AccountBox,
  Article,
  Group,
  LightMode,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

interface ISidebarProps {
  setMode: (variant: PaletteMode) => void;
  mode: string;
}

const Sidebar: FC<ISidebarProps> = ({setMode, mode}): JSX.Element => {

  const changeThemeHandler = () => {
    setMode(mode === "light" ? "dark" : "light")
  }

  return (
    <Box flex={1}
         p={2}
         sx={{display: {xs: 'none', sm: "block"}}}>
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={"a"}
                            href="/">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"
                            href="#">
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"
                            href="#">
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"
                            href="#">
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"
                            href="#">
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"
                            href="#">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"
                            href="#">
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={changeThemeHandler}>
              <ListItemIcon>
                {mode === "dark" ?<LightMode/> : <ModeNight/>}
              </ListItemIcon><Switch checked={mode === "dark"}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default Sidebar;
