import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import "./Navbar.scss";

const pages = [
  "HOME",
  "ABOUT US",
  "OUR TEAM",
  "MARKETPLACE ROAD MAP",
  "WHITE PAPER",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const renderMenu = (
    anchorEl: HTMLElement | null,
    items: string[],
    onClose: () => void
  ) => (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {items.map((item) => (
        <MenuItem key={item} onClick={onClose}>
          <Typography sx={{ textAlign: "center" }}>{item}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="navbar-container">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {renderMenu(anchorElNav, pages, handleCloseNavMenu)}
          </Box>
          {/* Desktop Menu */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 10 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button variant="contained" className="button-connect-wallet">
            Connect Wallet
          </Button>
          <LanguageIcon />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <KeyboardArrowDownIcon className="menu-icon" />
              </IconButton>
            </Tooltip>
            {renderMenu(anchorElUser, settings, handleCloseUserMenu)}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
