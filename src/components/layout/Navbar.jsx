import React, { useState, useRef } from "react";
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemText, 
  Typography,Collapse, Box, Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/logo.png";

const navLinks = [
  { title: "Home", path: "/" },
  // {
  //   title: "Services",
  //   dropdown: [
  //     { title: "Web Development", path: "/services/web" },
  //     { title: "Mobile App Development", path: "/services/mobile" },
  //   //   { title: "AI & Automation", path: "/services/ai" },
  //     { title: "Shopify Development", path: "/services/shopify" },
  //     { title: "UI/UX & Product Design", path: "/services/uiux" }
  //   ]
  // },
  { title: "Services", path: "/services" },
  // { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const timerRef = useRef(null);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleHover = (index) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpenMenu(index), 120);
  };

  const handleLeave = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpenMenu(null), 160);
  };

    const toggleSubMenu = (index) =>
    setExpandedMenu(expandedMenu === index ? null : index);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ 
          background: "#000", 
          borderBottom: "1px solid rgba(0,229,168,0.25)", 
          height: 80,
          justifyContent: "center"
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="AppUnix" style={{ height: 65 }} />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navLinks.map((nav, index) => (
              <Box key={nav.title} sx={{ position: "relative" }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <Button
                  component={Link}
                  to={nav.path || "#"}
                  sx={{
                    color: "#e8fff3",
                    fontSize: 18,
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    "&:hover": { color: "#00e5a8" }
                  }}
                >
                  {nav.title}
                  {nav.dropdown && (
                    <motion.span
                      animate={{ rotate: openMenu === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowDropDownIcon sx={{ color: "#00e5a8" }} />
                    </motion.span>
                  )}
                </Button>

                {/* Dropdown */}
                {nav.dropdown && (
                  <AnimatePresence>
                    {openMenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: "absolute",
                          top: "3.5rem",
                          background: "#000",
                          border: "1px solid rgba(0,229,168,0.2)",
                          borderRadius: "6px",
                          minWidth: "180px",
                          zIndex: 99
                        }}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={handleLeave}
                      >
                        {nav.dropdown.map((item) => (
                          <Typography
                            key={item.title}
                            component={Link}
                            to={item.path}
                            sx={{
                              display: "block",
                              padding: "7px 16px",
                              color: "#e8fff3",
                              textDecoration: "none",
                              "&:hover": { background: "rgba(0,229,168,0.15)", color: "#00e5a8" }
                            }}
                          >
                            {item.title}
                          </Typography>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </Box>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ color: "#00e5a8", display: { md: "none" } }} onClick={toggleDrawer}>
            <MenuIcon sx={"font-size:1.9rem"}/>
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}
        PaperProps={{ sx: { width: 260, background: "#000", paddingTop: 2 } }}
      >
        <List>
          {navLinks.map((item, index) => (
            <React.Fragment key={item.title}>
              
              {/* MAIN ITEM */}
              <ListItemButton
                onClick={() =>
                  item.dropdown ? toggleSubMenu(index) : toggleDrawer()
                }
                component={!item.dropdown ? Link : "div"}
                to={!item.dropdown ? item.path : undefined}
              >
                <ListItemText primary={item.title} sx={{ color: "#00e5a8" }} />
                {item.dropdown && (
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#00e5a8",
                      transform: expandedMenu === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.2s"
                    }}
                  />
                )}
              </ListItemButton>

              {/* DROPDOWN ITEMS */}
              {item.dropdown && (
                <Collapse in={expandedMenu === index}>
                  {item.dropdown.map((child) => (
                    <ListItemButton
                      key={child.title}
                      component={Link}
                      to={child.path}
                      onClick={toggleDrawer}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={child.title} sx={{ color: "#fff" }} />
                    </ListItemButton>
                  ))}
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}
