import React, { useState, useContext } from "react";
import { Container, Typography, Box } from "@mui/material";
import EMIForm from "../components/EMIForm";
import Results from "../components/Results";
import AmortizationTable from "../components/AmortizationTable";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const [calcData, setCalcData] = useState(null);
  const handleReset = () => {
    setCalcData(null);
  };
  const { currency, setCurrency } = useContext(AppContext);
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Loan EMI Calculator
        </Typography>
        {/* Currency Selector */}
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Select Currency:
          </Typography>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{
              padding: "6px 12px",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            {["USD", "EUR", "GBP", "JPY", "INR"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Box>
        <Box textAlign="center" sx={{ mb: 4 }}>
          <button
            onClick={handleReset}
            style={{
              padding: "8px 16px",
              fontSize: "1rem",
              borderRadius: "4px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </Box>
        {/* pass back P, R, N and emi in one shot */}
        <EMIForm onCalculate={setCalcData} />

        {calcData && (
          <>
            <Results emi={calcData.emi} currency={currency} />
            <Box sx={{ my: 4 }}>
              <AmortizationTable {...calcData} />
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
