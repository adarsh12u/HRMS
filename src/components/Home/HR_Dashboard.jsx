import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";

const HR_Dashboard = () => {
 
  return (
    <>
      <Box component={"div"}>
        <Navbar />

        <Slidebar />
      </Box>
    </>
  );
};
export default HR_Dashboard;
