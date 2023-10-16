import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  theme,
  Grid,
  Container,
  styled,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CircleIcon from "@mui/icons-material/Circle";

const WrapperBox = styled("div")({
  maxWidth: "100%",
  overflowX: "hidden",
  overflowY: "hidden",
  height: "100vh",
  backgroundImage:
    'url("https://coinsvector.com/assets/images/backgroup/bg-slider.png")',
  backgroundSize: "cover",
  position: "relative",
  zIndex: "1",

  padding: "150px 0px 0px 0px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(9,18,29,0.9)", // Dark blue with 60% opacity
    mixBlendMode: "multiply",
    zIndex: -1,
  },
});

const sliderSettings = {
  //   dots: true,
  //   infinite: true,

  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   autoplay: true,
  autoplaySpeed: 2000,
};

const BannerText = styled("div")({
  color: "white",
  maxWidth: "56%",
  padding: "40px 115px",
  "@media screen and (max-width:1024px)": {
    padding: "0px",
    maxWidth: "50%",
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
// const StyledCircleIcon = styled(CircleIcon)({
//   fontSize: "1em",
//   cursor: "pointer",
//   marginRight: "3px",

//   "&:hover": {
//     color: "#FFBE33",
//     transform: "scale(1.7)",
//   },
// });
const ImageEnd = styled("div")({
  position: "absolute",
  bottom: "-50px",
  right: "-50px",
  zIndex: "-1",
  mixBlendMode: "luminosity",
});
function Banner() {
  return (
    <WrapperBox>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Slider
              slick-prev
              {...sliderSettings}

              // className="slick-prev "
            >
              <BannerText sx={{ padding: "0px 120px" }}>
                <Typography
                  variant="h1"
                  sx={{
                    paddingBottom: "10px",
                    fontFamily: "Space Grotesk ,sans-serif",
                    fontSize: "72px",
                    fontWeight: "700",
                  }}
                >
                  Secure Your Digital Assets with CryptoVault
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Space Grotesk" }}
                >
                  Unlock a world of digital finance with CryptoVault, your
                  trusted partner in safeguarding and managing cryptocurrencies.
                </Typography>
                <Box
                  sx={{
                    paddingTop: "3rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StyledNavLink to="/">
                    <img
                      src="https://coinsvector.com/assets/images/apple-logo.png"
                      style={{ marginRight: "1rem", maxWidth: "140px" }}
                    ></img>
                  </StyledNavLink>
                  <StyledNavLink to="/">
                    <img
                      src="https://coinsvector.com/assets/images/play-store-logo-33869.png"
                      style={{ maxWidth: "123px" }}
                    ></img>
                  </StyledNavLink>
                </Box>
              </BannerText>

              <BannerText sx={{ padding: "0px 120px" }}>
                <Typography
                  variant="h1"
                  sx={{
                    paddingBottom: "10px",
                    fontFamily: "Space Grotesk ,sans-serif",
                    fontSize: "72px",
                    fontWeight: 700,
                  }}
                >
                  Secure Your Digital Assets with CryptoVault
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Space Grotesk,sansSerif" }}
                >
                  Unlock a world of digital finance with CryptoVault, your
                  trusted partner in safeguarding and managing cryptocurrencies.
                </Typography>
                <Box
                  sx={{
                    paddingTop: "3rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <StyledNavLink to="/">
                    <img
                      src="https://coinsvector.com/assets/images/apple-logo.png"
                      style={{ marginRight: "1rem", maxWidth: "140px" }}
                    ></img>
                  </StyledNavLink>
                  <StyledNavLink to="/">
                    <img
                      src="https://coinsvector.com/assets/images/play-store-logo-33869.png"
                      style={{ maxWidth: "123px" }}
                    ></img>
                  </StyledNavLink>
                </Box>
              </BannerText>
            </Slider>
          </Grid>
          <Grid lg={6}>
            <ImageEnd>
              <img
                style={{
                  //   maxWidth: "100%",
                  height: "auto",
                  transform: "scale(1)",
                }}
                src="https://coinsvector.com/assets/images/backgroup/bg_inner_slider.png"
                alt=""
              />
            </ImageEnd>
          </Grid>
          {/* <Grid item lg={12}>
            <StyledDots
              sx={{
                padding: "7em 0 0 10em",
                color: "white",
              }}
            > */}
          {/* <StyledCircleIcon />
              <StyledCircleIcon />
              <StyledCircleIcon /> */}
          {/* </Box>
          </Grid> */}
        </Grid>
      </Container>
    </WrapperBox>
  );
}

export default Banner;
