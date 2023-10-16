import { Box } from "@mui/material";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Homelayout from "./HomeLayout";
import Projectpage from "./pages/Home/Projectpage";
import React from "react";

function App() {
  return (
    <Box>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homelayout />} />
            <Route path="/project" element={<Projectpage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Box>
  );
}

export default App;
