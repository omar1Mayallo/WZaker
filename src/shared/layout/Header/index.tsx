//________________________IMPORTS________________________//
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import Logo from "./Logo";
import Drawer from "./Drawer";
import {slugify} from "../../helpers";
import {navLinks} from "../../../data/links";
import {Link} from "react-router-dom";

//________________________TYPES________________________//

//________________________COMPONENTS________________________//
const Header: React.FC = () => {
  // Handle Toggle DrawerSidebar
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Box component={"header"} sx={{display: "flex"}}>
      {/* Navbar */}
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
              flexDirection: {xs: "row-reverse", md: "row"},
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{display: {md: "none"}}}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
            <Box sx={{display: {xs: "none", md: "block"}}}>
              {navLinks.map((item) => (
                <Button
                  key={item}
                  sx={{color: "#fff"}}
                  component={Link}
                  to={`/${slugify(item)}`}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer_Sidebar */}
      <Box component="nav">
        <Drawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Box>
    </Box>
  );
};

export default Header;
