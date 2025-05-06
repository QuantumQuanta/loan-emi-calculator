import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import useEMICalculator from "../hooks/useEMICalculator";
import generateAmortization from "../utils/generateAmortization";

const EMIForm = ({ onCalculate }) => {  // ✅ Accept onCalculate as prop
  const [P, setP] = useState(100000);  // Principal
  const [R, setR] = useState(10);      // Interest Rate
  const [N, setN] = useState(12);      // Duration in Months

  const emi = useEMICalculator(P, R, N);  // ✅ Calculate EMI

  const handleSubmit = (e) => {
    e.preventDefault();

    if (P <= 0 || R <= 0 || N <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const amortization = generateAmortization(P, R, N);
    console.log("Setting CalcData:", { emi, amortization, P, R, N });
    onCalculate({ emi, amortization, P, R, N });  // ✅ Use prop instead of context
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <TextField
        fullWidth
        label="Principal (P)"
        type="number"
        value={P}
        onChange={(e) => setP(+e.target.value)}
        margin="normal"
        helperText="Enter the loan principal"
      />
      <TextField
        fullWidth
        label="Interest Rate (R %)"
        type="number"
        value={R}
        onChange={(e) => setR(+e.target.value)}
        margin="normal"
        helperText="Enter the annual interest rate"
      />
      <TextField
        fullWidth
        label="Duration (N months)"
        type="number"
        value={N}
        onChange={(e) => setN(+e.target.value)}
        margin="normal"
        helperText="Enter the loan duration in months"
      />
      <Button variant="contained" type="submit" fullWidth>
        Calculate EMI
      </Button>
    </Box>
  );
};

export default EMIForm;
