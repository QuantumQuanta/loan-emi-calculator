// import React from "react";
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";

const ExchangeTable = ({ rates }) => {
  const entries = Object.entries(rates);
  const [page, setPage] = useState(0);
  const rowsPerPage = 20;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(([code, rate]) => (
                <TableRow key={code}>
                  <TableCell>{code}</TableCell>
                  <TableCell align="right">{rate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={entries.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default ExchangeTable;
