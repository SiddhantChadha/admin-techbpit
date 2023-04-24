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
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { NavLink, Link } from "react-router-dom";
import "../index.css";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ alignSelf: "center", paddingY: 2 }}>
          <img src={logo} />
        </Box>
        <p>TechBPIT</p>
        <Divider />
        <List>
          <ListItem key="Groups" disablePadding>
            <Link to={`groups`}>
              <ListItemButton>
                <ListItemIcon>
                  <Groups2RoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key="Users" disablePadding>
            <NavLink
              to={`users`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem key="Posts" disablePadding>
            <Link to={`posts`}>
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFeedRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Logout" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
