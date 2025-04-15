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

const revenueCustomerKPIs = [
    { label: "Average Ticket Value (Retail)", value: "$270" },
    { label: "Average Ticket Value (Member)", value: "$167" },
    { label: "Membership Penetration", value: "30%" },
    { label: "Customer Churn Rate", value: "8%" },
    { label: "Add-On Revenue %", value: "18%" }
];

export default function RevenueCustomerKPITable() {
    return (
        <TableContainer sx={{}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>KPI</strong></TableCell>
                        <TableCell align="right"><strong>Value</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {revenueCustomerKPIs.map((row, index) => (
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
