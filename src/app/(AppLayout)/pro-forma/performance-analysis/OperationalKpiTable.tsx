import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from "@mui/material";

const operationalKPIs = [
    { label: "Average Cars Washed per Day", value: "150" },
    { label: "Wash Capacity Utilization", value: "75%" },
    { label: "Average Wash Duration", value: "6 minutes" },
    { label: "Equipment Downtime", value: "2%" }
];

export default function OperationalKPITable() {
    return (
        <TableContainer sx={{}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Indicators</strong></TableCell>
                        <TableCell align="right"><strong>Value</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operationalKPIs.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.label}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
