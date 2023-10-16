import { Grid, Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const BoxLinks = styled("div")({
  "& p": {
    fontSize: "13px",
    marginTop: "10px",
    fontFamily: "Space Grotesk",
    "&:hover": {
      color: "#80F401",
      cursor: "pointer",
    },
  },
});
const StyleHr = styled("div")({
  padding: "1rem",
  "& .hr": {
    color: "blue",
  },
});
const StyledIconContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  "& svg": {
    padding: ".5rem",
    marginLeft: "10px", // Adjust as needed
    color: "#FFF", // Change to the desired color
    width: "34px",
    height: "34px",
    border: "1px solid #798DA3",
    borderRadius: "50%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#86FF00",
    },
  },
});
const StyledCopyright = styled("div")({
  "& span": {
    "&:hover": {
      color: "#6ED106",
      cursor: "pointer",
    },
  },
});
const ContactUs = () => {
  return (
    <Box sx={{ background: "#09121D", padding: "6rem" }} id="contactus">
      <Container>
        <Grid container>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Box>
              <img
                src="https://coinsvector.com/assets/images/logo.png"
                alt=""
                style={{ maxWidth: "150px" }}
              ></img>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Box sx={{ marginRight: "2rem" }}>
                <Typography
                  variant="h4"
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "#fff",
                    fontWeight: "900",
                    paddingBottom: ".7rem",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: " 1.4",
                    color: " #798DA3",
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "13px",
                    textDecoration: "underline",
                    fontFamily: "Space Grotesk",
                    ":hover": {
                      color: "#80F401",
                      cursor: "pointer",
                    },
                  }}
                >
                  info@coinsvector.com
                </Typography>
              </Box>

              <hr
                style={{
                  height: "9rem",
                  marginLeft: "5rem",
                  borderColor: "gray",
                }}
              />
            </Box>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={6}>
            <BoxLinks>
              <Typography
                variant="h4"
                style={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#fff",
                  fontWeight: "900",
                  paddingBottom: ".7rem",
                }}
              >
                Support
              </Typography>
              <Typography variant="body1">Join Us</Typography>
              <Typography variant="body1">Our Partners</Typography>
              <Typography variant="body1">FAQs</Typography>
              <Typography variant="body1">Support</Typography>
            </BoxLinks>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <StyleHr>
              <hr
                className="hr"
                style={{ borderColor: "#09121D", borderWidth: "" }}
              />
            </StyleHr>
          </Grid>
        </Grid>
        <Grid container style={{ width: "100%" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <StyledCopyright
              display="flex"
              justifyContent="flex-start"
              width="100%"
            >
              <Typography
                variant="body1"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  color: "#344252",
                }}
              >
                Copyright © 2023 <span>Coins Vector</span>
              </Typography>
            </StyledCopyright>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <StyledIconContainer
              display="flex"
              justifyContent="flex-end"
              width="100%"
            >
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
            </StyledIconContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
