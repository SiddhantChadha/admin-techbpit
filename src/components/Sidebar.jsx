import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/images/logo.png";
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


const drawerWidth = 240;

function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >  
    <Box sx={{ alignSelf: 'center',paddingY: 2}}>
      <img src={logo} />
    </Box>
      <Divider />
      <List>
        <ListItem key='Groups' disablePadding>
        <ListItemButton>
              <ListItemIcon>
                <Groups2RoundedIcon />
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
        </ListItem>

        <ListItem key='Users' disablePadding>
        <ListItemButton>
              <ListItemIcon>
                <ManageAccountsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItemButton>
        </ListItem>

        <ListItem key='Posts' disablePadding>
        <ListItemButton>
              <ListItemIcon>
                <DynamicFeedRoundedIcon />
              </ListItemIcon>
              <ListItemText primary='Posts' />
            </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
      <ListItem key='Logout' disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
      </List>
    </Drawer>
  </Box>
);
}

export default Sidebar;
