import React from "react";
import TablePagination from "@mui/material/TablePagination";
import MaterialTable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import Content from "./Content";

const PAGINATION_OPTIONS = [5, 10, 25];
function Table(props) {
  const headers = () => Object.keys(props.tableContent[0]);
  const rows = () => props.tableContent.map((row) => Object.values(row));
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <MaterialTable sx={{ minWidth: 650 }} aria-label="simple table">
          <Header headers={headers()} />
          <Content rows={rows()} />
        </MaterialTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={PAGINATION_OPTIONS}
        component="div"
        count={props.count}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onPageChange={props.changePageHandler}
        onRowsPerPageChange={props.changeRowsPerPageHandler}
      />
    </React.Fragment>
  );
}

export default Table;
