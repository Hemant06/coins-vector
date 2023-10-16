import { Grid, Typography, Box, styled, Container } from "@mui/material";
import React from "react";

const StyledHeading = styled("div")({
  "& h3": {
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
const StyledBox = styled("div")({
  paddingTop: "3rem",
  color: "#fff",
  textAlign: "center",
  width: "324px",
  "& h3": {
    fontSize: "26px",
    lineHeight: "1.4",
    fontWeight: "700",
    margin: "1rem",
    fontFamily: "Space Grotesk",
  },

  img: {
    transition: "transform 0.5s", // smoothens the rotation for the image
  },
  "&:hover": {
    "& img": {
      transform: "rotate(360deg)",
    },

    "& h1": {
      opacity: "1",
      color: "white",
    },
  },
  "& p": {
    fontSize: "15px",
    lineHeight: "21px",
    fontWeight: "500",
    color: "#798DA3",
  },
  "& h1": {
    opacity: "0.6", // Temporarily set this to 1 to check the hover effect
    fontSize: "100px",
    // Temporarily, to ensure this is the element you're targeting
  },
  "@media screen and (max-width:1024px)": {
    "& p": {
      color: "10px",
      marginRight: "15px",
    },
  },
});
const Joinus = () => {
  return (
    <Box sx={{ background: "#09121D", padding: "20px 30px" }} id="join-us">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12}>
            <StyledHeading>
              <Typography variant="h3">
                Easy To Join Coins Vector With 3 Steps
              </Typography>
            </StyledHeading>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <StyledBox>
              <img
                src="https://coinsvector.com/assets/images/icon/cryptocurrencies.png"
                style={{ width: "70px" }}
                alt=""
              />
              <Typography variant="h3">Submit KYC</Typography>
              <Typography variant="body1">
                KYC, or Know Your Customer, is a mandatory process that
                financial institutions and other regulated companies employ to
                verify the identity of their customers.
              </Typography>
              <Typography variant="h1">01</Typography>
            </StyledBox>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <StyledBox
              sx={{
                paddingTop: "3rem",
                color: "#fff",
                textAlign: "center",
                width: "324px",
              }}
            >
              <img
                src="https://coinsvector.com/assets/images/icon/wallet.png"
                style={{ width: "70px" }}
                alt=""
              />
              <Typography variant="h3">Verify Wallet</Typography>
              <Typography variant="body1">
                Verifying your wallet is a crucial step to ensure the security
                and authenticity of your digital asset transactions.It involves
                confirming that the wallet address and other details.
              </Typography>
              <Typography variant="h1">02</Typography>
            </StyledBox>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <StyledBox
              sx={{
                paddingTop: "3rem",
                color: "#fff",
                textAlign: "center",
                width: "324px",
              }}
            >
              <img
                src="https://coinsvector.com/assets/images/icon/bitcoin.png"
                style={{ width: "70px" }}
                alt=""
              />
              <Typography variant="h3">Start Staking</Typography>
              <Typography variant="body1">
                Staking is the process of participating in a proof-of-stake
                (PoS) consensus mechanism by holding and "staking" a
                cryptocurrency in a wallet to support the operations of a
                blockchain network.
              </Typography>
              <Typography variant="h1">03</Typography>
            </StyledBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Joinus;
