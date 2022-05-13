import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Header(props) {
  return (
    <TableHead>
      <TableRow>
        {props.headers.map((headerLabels, index) => (
          <TableCell key={index} align="right">
            {headerLabels}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
