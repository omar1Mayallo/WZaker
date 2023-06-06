//________________________IMPORTS________________________//
import {Link} from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer as DrawerSide,
} from "@mui/material";
import {slugify} from "../../helpers";
import {navLinks} from "../../../data/links";

//________________________TYPES________________________//
type Props = {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
};

//________________________COMPONENTS________________________//
const Drawer: React.FC<Props> = ({handleDrawerToggle, mobileOpen}) => {
  return (
    <DrawerSide
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: {xs: "block", md: "none"},
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 260, //drawer-width
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{textAlign: "center"}}
                component={Link}
                to={`/${slugify(item)}`}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </DrawerSide>
  );
};

export default Drawer;
