import React from "react";
import { Typography, Box } from "@mui/material";

const Results = ({ emi }) => (
  <Box sx={{ textAlign: "center", mt: 4 }}>
    <Typography variant="h5">Monthly EMI</Typography>
    <Typography variant="h4" color="primary">${emi}</Typography>
  </Box>
);

export default Results;
