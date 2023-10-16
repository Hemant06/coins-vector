import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const StyledBox = styled("div")({
  "& h3": {
    textAlign: "center",
    fontSize: "50px",
    lineHeight: "1.1",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    color: "#fff",
  },
});
const Stylepara = styled("div")({
  "& p": {
    fontSize: "15px",
    lineHeight: "21px",
    fontWeight: "500",
    color: "#798DA3",
    paddingBottom: ".3rem",
  },
  "& .p2": {
    color: "#76E004",
  },
});
const StyleHr = styled("div")({
  "& .hr": {
    color: "#222A34",
  },
});
const StyledHeader = styled("div")({
  "& h2": {
    fontSize: "50px",
    lineHeight: "1.1",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    color: "#fff",
  },
});
const ImgBackground = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  mixBlendMode: "luminosity",
  opacity: 0.7,
  zIndex: 1,
});

const Wrapper = styled("div")({
  position: "relative",
  marginTop: "5rem",
  minHeight: "500px",
});
const StylePara = styled("div")({
  "& p": {
    fontSize: "17px",
    lineHeight: "1.4",
    color: " #fff",
    marginTop: "8px",
  },
});
const GetInTouch = () => {
  return (
    <Box sx={{ background: "#09121D" }} id="faqs">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12}>
            <StyledBox>
              <Typography variant="h3">Get In Touch</Typography>
            </StyledBox>
          </Grid>
          <Grid item lg={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MailOutlineIcon
                  style={{
                    paddingRight: ".5rem",
                    width: "30px",
                    height: "30px",
                    color: "#415060",
                  }}
                />
                <StyleHr>
                  <hr style={{ height: "45px" }} className="hr" />
                </StyleHr>
              </Box>
              <Stylepara sx={{ marginLeft: "15px" }}>
                <Typography variant="body1">Email</Typography>
                <Typography variant="body1" className="p2">
                  info@coinsvector.com
                </Typography>
              </Stylepara>
            </Box>
          </Grid>
        </Grid>
        <Wrapper>
          <ImgBackground
            src="https://coinsvector.com/assets/images/backgroup/CTA.png"
            alt="Background"
          />
          <Grid container>
            <Grid item lg={6} md={6} sm={12}>
              <Box paddingTop={"6rem"}>
                <Box>
                  <StyledHeader>
                    <Typography variant="h2">
                      Seamless, Secure, Superior: The Crypto Wallet Revolution
                      Begins Here
                    </Typography>
                  </StyledHeader>
                  <StylePara>
                    <Typography variant="body1">
                      In an age where digital transactions define our daily
                      lives, we proudly introduce our state-of-the-art
                      cryptocurrency wallet. Designed with the user in mind, our
                      wallet promises a seamless experience, ensuring that every
                      transaction is smooth and hassle-free.
                    </Typography>
                  </StylePara>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <Box paddingTop={"6rem"}>
                <img
                  src="https://coinsvector.com/assets/images/common/img_cta.png"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default GetInTouch;
