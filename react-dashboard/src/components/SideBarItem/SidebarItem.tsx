import { FC, JSX, ReactNode } from 'react';
import { Typography, useTheme } from '@mui/material';
import { tokens } from '@/context/theme';
import { MenuItem } from 'react-pro-sidebar';
import { RoutesConstants } from '@/routes';

interface ISideBarItem {
  title: string;
  to: RoutesConstants;
  icon: ReactNode;
  selected: string;
  setSelected: (arg: RoutesConstants) => void;
}

const SidebarItem: FC<ISideBarItem> = ({ to, setSelected, selected, title, icon }): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
      <MenuItem active={selected === to}
                style={{ color: colors.grey[100] }}
                onClick={() => setSelected(to)}
                icon={icon}>
        <Typography>{title}</Typography>
      </MenuItem>
  );
};
export default SidebarItem;
