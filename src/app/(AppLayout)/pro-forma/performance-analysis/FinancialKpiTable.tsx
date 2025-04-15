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

const financialKPIs = [
    { label: "Projected Monthly Revenue", value: "$16,00,000" },
    { label: "Net Income Margin", value: "22%" },
    { label: "Gross Profit Margin", value: "65%" },
    { label: "Break-even Point", value: "14 months" },
    { label: "Return on Investment (ROI)", value: "25%" },
    { label: "Payback Period", value: "1.2 years" }
];

export default function FinancialKPITable() {
    return (
        <TableContainer sx={{}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Indicator</strong></TableCell>
                        <TableCell align="right"><strong>Value</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {financialKPIs.map((row, index) => (
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
