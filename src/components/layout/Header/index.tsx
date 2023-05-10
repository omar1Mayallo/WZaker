import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../../common/Logo";
import {Link as RouterLink} from "react-router-dom";
import {slugify} from "../../../helper";

const drawerWidth = 240;
const navItems = ["Quran", "Azkar", "Hadith", "Prayer Timer"];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{textAlign: "center"}}
              component={RouterLink}
              to={`/${slugify(item)}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{display: "flex"}}>
      <AppBar component="nav" position="static" sx={{background: "#090e21"}}>
        <Toolbar
          sx={{
            display: {sm: "flex"},
            flexDirection: {xs: "row-reverse", sm: "row"},
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Box sx={{display: {xs: "none", sm: "block"}}}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{color: "#fff"}}
                component={RouterLink}
                to={`/${slugify(item)}`}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* APP_Sidebar */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: "block", sm: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
