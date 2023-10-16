import React from "react";
import Topbar from "./Topbar";
import Bannerpage from "../pages/Home/Bannerpage";
import { Box } from "@mui/material";
import Featurepage from "../pages/Featurepage";
import Joinus from "../pages/Joinus";
import OurPartners from "../pages/OurPartners";
import CryptoWallet from "../pages/CryptoWallet";
import GetInTouch from "../pages/GetInTouch";
import ContactUs from "../pages/ContactUs";
import CssBaseline from "@mui/material";

function Homelayout() {
  return (
    <Box>
      <Topbar />
      <Bannerpage />
      <Featurepage />
      <Joinus />
      <OurPartners />
      <CryptoWallet />
      <GetInTouch />
      <ContactUs />
    </Box>
  );
}
export default Homelayout;
