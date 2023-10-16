import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const StyledSliderContainer = styled.div({
  ".slick-dots": {
    bottom: "-30px",
    listStyle: "none",
    display: "flex",
    justifyContent: "center", // Center the dots horizontally
  },

  ".slick-dots li button:before": {
    content: "'•'",
    fontSize: "7px", // Smaller dot size
    lineHeight: "16px",
    color: "transparent", // Light white color for inactive dots
    transition: "all 0.3s", // Smooth transition effect
    border: "3px solid #fff", // Border color
    borderRadius: "50%", // Circular border
    padding: "1px", // Spacing around the dot
  },

  ".slick-dots li.slick-active button:before": {
    color: "rgba(134, 255, 0)", // Full white color for the active dot
    // A little bigger size for the active dot
  },
});
const StyledImg = styled("div")({
  position: "relative",
  "& .img1": {
    position: "absolute", // Add this line
    top: "44%",
    right: "-13%",
    transform: "translateX(-50%)",
  },
  "& .img2": {
    position: "absolute", // Add this line
    top: "-10%",
    left: "46%",
    transform: "translateX(-50%)",
  },
  "& .img3": {
    // Add this line
    position: "absolute",
    top: "12%",
    left: "-2%",
    transform: "translateX(-50%)",
  },
  "& .img5": {
    position: "absolute",
    // Add this line
    bottom: "-7%",
    right: "-11%",
    transform: "translateX(-50%)",
  },
  "& .img4": {
    position: "absolute",
    // Add this line
    top: "43%",
    left: "26%",
    transform: "translateX(-50%)",
  },
  "& .img6": {
    position: "absolute",
    // Add this line
    bottom: "6px",
    left: "-6%",
    transform: "translateX(-50%)",
  },
});
const StyledImgBox = styled("div")({
  "@media screen and (max-width:1024px)": {
    "& img": {
      width: "90px",
    },
  },
});
const CryptoWallet = () => {
  return (
    <Box
      sx={{
        padding: "150px ",
        background: "#09121D",
      }}
    >
      <Grid container spacing={2} alignItems={"start"}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <StyledImg>
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src="https://coinsvector.com/assets/images/common/img_technology1.png"
              alt=""
            />
            <img
              className="img1"
              src="https://coinsvector.com/assets/images/common/coin1.png"
              alt=""
            />
            <img
              className="img2"
              src="https://coinsvector.com/assets/images/common/coin2.png"
              alt=""
            />
            <img
              className="img3"
              src="https://coinsvector.com/assets/images/common/coin3.png"
              alt=""
            />
            <img
              className="img4"
              src="https://coinsvector.com/assets/images/common/coin4.png"
              alt=""
            />
            <img
              className="img5"
              src="https://coinsvector.com/assets/images/common/coin5.png"
              alt=""
            />
            <img
              className="img6"
              src="https://coinsvector.com/assets/images/common/coin6.png"
              alt=""
            />
          </StyledImg>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ paddingLeft: "40px" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "50px",
                lineHeight: "1.1",
                color: "#fff",
                fontWeight: "700",
                paddingBottom: "3rem",
                maxWidth: "353px",
              }}
            >
              What Is Crypto Wallet?
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", color: "#798DA3;", fontWeight: "500" }}
            >
              A cryptocurrency wallet is a software program or a physical device
              that allows individuals to securely store, manage, and interact
              with their cryptocurrencies. It's an essential tool for anyone
              looking to own, use, or invest in cryptocurrencies like Bitcoin,
              Ethereum, or any other digital currencies.
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "3rem", paddingLeft: "40px" }}>
            <StyledSliderContainer>
              <Slider {...settings}>
                <StyledImgBox>
                  <Grid container spacing={2}>
                    {/* First Row */}
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_4.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_2.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>

                    {/* Second Row */}
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_1.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                  </Grid>
                </StyledImgBox>
                <StyledImgBox>
                  <Grid container spacing={2}>
                    {/* First Row */}
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_4.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_2.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>

                    {/* Second Row */}
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_1.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                  </Grid>
                </StyledImgBox>
                <StyledImgBox>
                  <Grid container spacing={3}>
                    {/* First Row */}
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_4.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_2.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>

                    {/* Second Row */}
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_1.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                  </Grid>
                </StyledImgBox>
                <StyledImgBox>
                  <Grid container spacing={3}>
                    {/* First Row */}
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_4.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_2.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>

                    {/* Second Row */}
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_1.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                      <img
                        src="https://coinsvector.com/assets/images/common/logo_tech_5.png"
                        alt=""
                      />
                    </Grid>
                  </Grid>
                </StyledImgBox>
                {/* Add more slides with similar structure as needed */}
              </Slider>
            </StyledSliderContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptoWallet;
