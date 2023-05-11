import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../common/Logo";
import {Link as RouterLink} from "react-router-dom";
import {slugify} from "../../../helper";
import {
  Container,
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";

const drawerWidth = 240;
const navItems = ["Quran", "Azkar", "Hadith", "Prayer Timer"];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <Box component={"header"} sx={{display: "flex"}}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          background: "#090e21",
        }}
      >
        <Container maxWidth="xl">
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
        </Container>
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
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
