'use client';

import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

const amortizationData = [
    {
        year: 1,
        begBalance: 3440000,
        principalPaid: 38378,
        interestPaid: 308043,
        endBalance: 3401622,
    },
    {
        year: 2,
        begBalance: 3401622,
        principalPaid: 41978,
        interestPaid: 304442,
        endBalance: 3359645,
    },
    {
        year: 3,
        begBalance: 3359645,
        principalPaid: 45916,
        interestPaid: 300505,
        endBalance: 3313729,
    },
    {
        year: 4,
        begBalance: 3313729,
        principalPaid: 50223,
        interestPaid: 296197,
        endBalance: 3263506,
    },
    {
        year: 5,
        begBalance: 3263506,
        principalPaid: 54934,
        interestPaid: 291486,
        endBalance: 3208572,
    },
];

const formatCurrency = (value: number) =>
    `$${value.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;

export default function DebtAmortizationTable() {
    return (
        <Box mt={6}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                5-Year Amortization of Debt
            </Typography>

            <TableContainer component={Paper} elevation={1}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell><strong>Year</strong></TableCell>
                            <TableCell align="right"><strong>Beg. Debt Balance</strong></TableCell>
                            <TableCell align="right"><strong>Principal Paid</strong></TableCell>
                            <TableCell align="right"><strong>Interest Paid</strong></TableCell>
                            <TableCell align="right"><strong>End Debt Balance</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {amortizationData.map((row) => (
                            <TableRow key={row.year}>
                                <TableCell>{row.year}</TableCell>
                                <TableCell align="right">{formatCurrency(row.begBalance)}</TableCell>
                                <TableCell align="right">{formatCurrency(row.principalPaid)}</TableCell>
                                <TableCell align="right">{formatCurrency(row.interestPaid)}</TableCell>
                                <TableCell align="right">{formatCurrency(row.endBalance)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
