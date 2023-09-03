import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface Props {
  employee: any;
}

const Row = ({ employee }: Props) => {
  const { id, firstName, lastName, jobTitle, department, manager } = employee;
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {firstName} {lastName}
      </TableCell>
      <TableCell align="right">{jobTitle}</TableCell>
      <TableCell align="right">{department}</TableCell>
      <TableCell align="right">{manager}</TableCell>
    </TableRow>
  );
};

export default Row;
