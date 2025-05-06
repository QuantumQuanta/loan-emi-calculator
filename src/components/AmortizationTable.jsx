import React, { useContext } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";
import { AppContext } from '../context/AppContext';

const AmortizationTable = ({ amortization }) => {
  const { currency } = useContext(AppContext);

  if (!amortization || amortization.length === 0) {
    return <Typography>No calculation data available</Typography>;
  }

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {[
              "Month",
              "Principal",
              "Interest",
              "Total Payment",
              "Remaining Balance",
            ].map((h) => (
              <TableCell key={h}>
                <strong>{h}</strong>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {amortization.map((r) => (
            <TableRow key={r.month}>
              <TableCell>{r.month}</TableCell>
              <TableCell>{formatCurrency(r.principal)}</TableCell> {/* Use formatCurrency */}
              <TableCell>{formatCurrency(r.interest)}</TableCell> {/* Use formatCurrency */}
              <TableCell>{formatCurrency(r.total)}</TableCell> {/* Use formatCurrency */}
              <TableCell>{formatCurrency(r.balance)}</TableCell> {/* Use formatCurrency */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;
