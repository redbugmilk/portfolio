import MaterialTable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Header from "./Header/Header";
import Content from "./Content/Content";

function Table(props) {
  const headers = () => Object.keys(props.tableContent[0]);
  const rows = () => props.tableContent.map((row) => Object.values(row));
  return (
    <TableContainer component={Paper}>
      <MaterialTable sx={{ minWidth: 650 }} aria-label="simple table">
        <Header headers={headers()} />
        <Content rows={rows()} />
      </MaterialTable>
    </TableContainer>
  );
}

export default Table;
