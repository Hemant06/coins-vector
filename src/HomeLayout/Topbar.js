import {
  Container,
  Box,
  Toolbar,
  AppBar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navlinkbox = styled("div")({
  display: "flex",
  alignItems: "center",
  "& a": {
    marginRight: "30px",
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontFamily: "Space Grotesk",
    fontWeight: "bold",
    "&:hover": {
      color: "#86FF00",
    },
  },

  "& .active": {
    color: "#86FF00",
    fontSize: "16px",
    fontWeight: "700",
  },
});
const StyledNavLink = styled(NavLink)({
  display: "inline-block",
  "& img": {
    transition: "transform 0.3s, filter 0.3s",
  },
  "&:hover img": {
    transform: "scale(1.05)",
    filter: "brightness(1.2)",
  },
});
function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setDrawerOpen((prevOpen) => !prevOpen);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Update state based on scroll position
      setIsScrolled(window.scrollY > 10);
    };

    // 2. Add scroll event listener
    window.addEventListener("scroll", checkScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  const location = useLocation();
  return (
    <Box>
      <AppBar
        sx={{
          background: isScrolled ? "black" : "transparent",
          boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        <Container style={{ maxWidth: "1300px" }}>
          <Toolbar sx={{ justifyContent: "space-between", height: "100px" }}>
            <Box>
              <NavLink to="/">
                <img
                  src="/images/coinvector-logo.png"
                  alt="logo"
                  style={{ maxWidth: "150px" }}
                />
              </NavLink>
            </Box>
            <Box
              sx={{
                display: { lg: "block", md: "none", sm: "none", xs: "none" },
              }}
            >
              <Navlinkbox>
                <NavLink
                  to="/"
                  activeClassName="active"
                  isActive={() =>
                    // This makes sure Home gets the active class
                    // when path is either "/" or "/joinus"
                    ["/", "/joinus", "/partners", "/faq", "/contact"].includes(
                      location.pathname
                    )
                  }
                >
                  Home
                </NavLink>
                <a
                  href="#join-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("join-us");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Join Us
                </a>
                <a
                  href="#join-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("our_partner");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Our Partners
                </a>
                <a
                  href="#join-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("faqs");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  FAQs
                </a>
                <a
                  href="#join-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("contactus");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Support
                </a>
                <a
                  href="#join-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("faqs");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact
                </a>
                {/* ... other links ... */}
                <StyledNavLink to="/">
                  <img
                    src="https://coinsvector.com/assets/images/apple-logo.png"
                    alt=""
                    width={"130px"}
                  ></img>
                </StyledNavLink>
                <StyledNavLink to="/">
                  <img
                    alt=""
                    src="https://coinsvector.com/assets/images/play-store-logo-33869.png"
                    width={"119px"}
                  ></img>
                </StyledNavLink>
              </Navlinkbox>
            </Box>

            <IconButton
              sx={{
                display: { lg: "none", md: "block", sm: "block", xs: "block" },
                color: "#fff",
              }}
              onClick={handleDrawerToggle}
            >
              <FiMenu />
            </IconButton>

            <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
              <List>
                <ListItem
                  button
                  component={NavLink}
                  to="/"
                  activeClassName="active"
                >
                  Home
                </ListItem>
                <ListItem button component={NavLink} to="/project">
                  Join Us
                </ListItem>
                <ListItem button component={NavLink} to="/project">
                  Our Partners
                </ListItem>
                <ListItem button component={NavLink} to="/project">
                  FAQs
                </ListItem>
                <ListItem button component={NavLink} to="/project">
                  Contact
                </ListItem>
                {/* ... add other navigation links as needed ... */}
              </List>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Topbar;
