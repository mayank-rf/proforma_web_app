'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Box } from '@mui/material';

const investmentData = [
    {
        item: 'Building',
        total: 1500000,
        equityPercent: 20,
        equity: 300000,
        debtPercent: 80,
        debt: 1200000,
        interestRate: 9,
        term: 300,
    },
    {
        item: 'Equipment',
        total: 1500000,
        equityPercent: 20,
        equity: 300000,
        debtPercent: 80,
        debt: 1200000,
        interestRate: 9,
        term: 300,
    },
    {
        item: 'Land',
        total: 800000,
        equityPercent: 20,
        equity: 160000,
        debtPercent: 80,
        debt: 640000,
        interestRate: 9,
        term: 300,
    },
    {
        item: 'Site',
        total: 250000,
        equityPercent: 20,
        equity: 50000,
        debtPercent: 80,
        debt: 200000,
        interestRate: 9,
        term: 300,
    },
    {
        item: 'Soft Costs',
        total: 250000,
        equityPercent: 20,
        equity: 50000,
        debtPercent: 80,
        debt: 200000,
        interestRate: 9,
        term: 300,
    },
];

export default function CarWashAcquisitionBudget() {
    const total = investmentData.reduce(
        (acc, row) => {
            acc.total += row.total;
            acc.equity += row.equity;
            acc.debt += row.debt;
            return acc;
        },
        { total: 0, equity: 0, debt: 0 }
    );

    const formatCurrency = (value: number) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;

    return (
        <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                Car Wash Acquisition Budget
            </Typography>

            <TableContainer component={Paper} elevation={1}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell>
                                <strong>Investment Item</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Total Investment</strong>
                            </TableCell>
                            <TableCell align="center">
                                <strong>% Equity</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>$ Equity</strong>
                            </TableCell>
                            <TableCell align="center">
                                <strong>% Debt</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>$ Debt</strong>
                            </TableCell>
                            <TableCell align="center">
                                <strong>Interest Rate %</strong>
                            </TableCell>
                            <TableCell align="center">
                                <strong>Loan Term (Mo)</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {investmentData.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.item}</TableCell>
                                <TableCell align="right">{formatCurrency(row.total)}</TableCell>
                                <TableCell align="center">{row.equityPercent}%</TableCell>
                                <TableCell align="right">{formatCurrency(row.equity)}</TableCell>
                                <TableCell align="center">{row.debtPercent}%</TableCell>
                                <TableCell align="right">{formatCurrency(row.debt)}</TableCell>
                                <TableCell align="center">{row.interestRate}%</TableCell>
                                <TableCell align="center">{row.term}</TableCell>
                            </TableRow>
                        ))}
                        {/* Totals Row */}
                        <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                            <TableCell>
                                <strong>Project Cost</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>{formatCurrency(total.total)}</strong>
                            </TableCell>
                            <TableCell />
                            <TableCell align="right">
                                <strong>{formatCurrency(total.equity)}</strong>
                            </TableCell>
                            <TableCell />
                            <TableCell align="right">
                                <strong>{formatCurrency(total.debt)}</strong>
                            </TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
