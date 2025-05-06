import React, { useContext, useState } from "react";
import {
  AppBar, Toolbar, IconButton, Typography,
  Box, Menu, MenuItem, Switch
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../context/AppContext";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const { themeMode, toggleTheme } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Exchange Rates Live", to: "/exchange-rates" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* mobile menu button */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={e => setAnchorEl(e.currentTarget)}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* logo/title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EMI Calculator
        </Typography>

        {/* desktop nav */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {navItems.map(i => (
            <MenuItem
              key={i.to}
              component={RouterLink}
              to={i.to}
              sx={{ color: "inherit" }}
            >
              {i.label}
            </MenuItem>
          ))}
        </Box>

        {/* theme switch */}
        <Switch
          checked={themeMode === "dark"}
          onChange={toggleTheme}
          color="default"
        />
      </Toolbar>

      {/* mobile menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{ display: { md: "none" } }}
      >
        {navItems.map(i => (
          <MenuItem
            key={i.to}
            component={RouterLink}
            to={i.to}
            onClick={() => setAnchorEl(null)}
          >
            {i.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Header;
