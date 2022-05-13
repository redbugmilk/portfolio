import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function Content(props) {
  return (
    <TableBody>
      {props.rows.map((row, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          {row.map((value, index) => (
            <TableCell key={index} align="right">
              {value}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
