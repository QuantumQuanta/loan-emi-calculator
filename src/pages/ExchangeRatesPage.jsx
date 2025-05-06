import React from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import ExchangeTable from "../components/ExchangeTable";
import useExchangeRates from "../hooks/useExchangeRates";
import Header from "../components/Header";

const ExchangeRatesPage = () => {
  const { rates, loading } = useExchangeRates();
  
  return (
    <>
    <Header />
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Exchange Rates
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <ExchangeTable rates={rates} />
      )}
    </Container>
    </>
    
  );
};

export default ExchangeRatesPage;
