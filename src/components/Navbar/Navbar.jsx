import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
import Logo from "../../market-analysis.png";
import { useNavigate } from "react-router-dom";

// import { logout } from "../store/auth/authSlice";

import { Link } from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, display: "flex", flexDirection: "column" }}
      >
        <Link to="/">
          <img alt="logo" src={Logo} className="logo" />
        </Link>
        STOCKIFY
      </Typography>
      <Divider />
      <List>
        <ListItem
          onClick={() => {
            navigate("/");
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"HOME"} />
          </ListItemButton>
        </ListItem>

        <ListItem
          onClick={() => {
            navigate("/about");
          }}
          disablePadding
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"ABOUT PROJECT"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar sx={{ backgroundColor: "#5271FF" }} component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <img alt="logo" src={Logo} className="logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/">
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    margin: "0rem 0.5rem",
                  }}
                >
                  HOME
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    margin: "0rem 0.5rem",
                  }}
                >
                  ABOUT PROJECT
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
