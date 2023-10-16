import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const StyledHeader = styled("div")({
  textAlign: "center",
  paddingTop: "5rem",

  color: "#fff",
  "& h3": {
    fontSize: "50px",
    lineHeight: "1.1",
    fontWeight: "700",
    fontFamily: "Space Grotesk",
  },
});
const ImgBox = styled("div")({
  textAlign: "center",
  "& img": {
    margin: "50px 30px 0px 0px",
    width: "60px",
    height: "auto",
    transition: "transform 0.3s ease", // smooth transition for scaling
    "&:hover": {
      transform: "scale(1.3)", // 10% increase in size on hover
    },
  },
});
const OurPartners = () => {
  return (
    <Box
      sx={{
        padding: "30px 30px",
        background: "#09121D",
      }}
    >
      <Container id="our_partner">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <StyledHeader>
              <Typography variant="h3">Our Partners</Typography>
            </StyledHeader>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ImgBox>
              <img
                src="https://coinsvector.com/assets/images/icon/compound.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/img.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/xtz.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/usdt.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/dash.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/bat.png"
                alt=""
              />
            </ImgBox>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ImgBox>
              <img
                src="https://coinsvector.com/assets/images/icon/dash.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/bat.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/chz.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/eth.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/mkr.png"
                alt=""
              />
            </ImgBox>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ImgBox>
              <img
                src="https://coinsvector.com/assets/images/icon/mkr.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/ada.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/atom.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/bit.png"
                alt=""
              />
            </ImgBox>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ImgBox>
              <img
                src="https://coinsvector.com/assets/images/icon/btc.png"
                alt=""
              />
              <img
                src="https://coinsvector.com/assets/images/icon/neo.png"
                alt=""
              />
            </ImgBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPartners;
