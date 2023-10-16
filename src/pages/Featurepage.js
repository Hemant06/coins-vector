import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const StyledHeading = styled("div")({
  "& h2": {
    color: "white",
    fontSize: "50px",
    lineHeight: "1.1",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    textAlign: "center",
    maxWidth: "646px",
    margin: "0 auto",
  },
});
const StyledImage = styled("div")({
  "& img": {
    maxWidth: "100%",
    height: "auto",
    transform: "scale(1)",
  },
});
const Featurepage = () => {
  return (
    <Box sx={{ background: "#09121D", padding: "20px" }}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item lg={12} md={12}>
            <StyledHeading>
              <Typography variant="h2">
                Featured IGO Projects Coming Soon
              </Typography>
            </StyledHeading>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <StyledImage>
              <img
                src="https://coinsvector.com/assets/images/home_cards.png"
                alt=""
              />
            </StyledImage>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                alignItems: "center",
                color: "#fff",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "700",
                  paddingBottom: "1rem",
                  fontSize: "40px",
                  lineHeight: "1.1",
                  fontFamily: "Space Grotesk",
                }}
              >
                Buy Crypto With a Card
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#798DA3",
                  fontWeight: "500",
                  lineHeight: "21px",
                  fontFamily: "Space Grotesk",
                }}
              >
                Get your first Bitcoin, Ethereum, Binance Coin and many other
                cryptocurrencies.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "900",
                  paddingBottom: "1rem",
                  fontSize: "40px",
                  lineHeight: "1.1",
                  color: "white",
                  fontFamily: "Space Grotesk",
                }}
              >
                Exchange Instantly
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#798DA3",
                  fontWeight: "900",
                  lineHeight: "21px",
                  fontSize: "15px",
                  fontFamily: "Space Grotesk",
                }}
              >
                No forms, no selfies. Trade crypto anytime with ease.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <StyledImage>
              <img
                src="https://coinsvector.com/assets/images/home_dex.png"
                alt=""
              />
            </StyledImage>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Featurepage;
