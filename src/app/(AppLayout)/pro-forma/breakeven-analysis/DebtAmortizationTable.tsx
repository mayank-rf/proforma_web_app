'use client';

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const amortizationData = [
    {
        year: 1,
        begBalance: 3440000,
        interestPaid: 308043,
        principalPaid: 38378,
        endBalance: 3401622,
    },
    {
        year: 2,
        begBalance: 3401622,
        interestPaid: 304442,
        principalPaid: 41978,
        endBalance: 3359645,
    },
    {
        year: 3,
        begBalance: 3359645,
        interestPaid: 300505,
        principalPaid: 45916,
        endBalance: 3313729,
    },
    {
        year: 4,
        begBalance: 3313729,
        interestPaid: 296197,
        principalPaid: 50223,
        endBalance: 3263506,
    },
    {
        year: 5,
        begBalance: 3263506,
        interestPaid: 291486,
        principalPaid: 54934,
        endBalance: 3208572,
    },
    {
        year: 6,
        begBalance: 3208572,
        interestPaid: 286333,
        principalPaid: 60087,
        endBalance: 3148485,
    },
    {
        year: 7,
        begBalance: 3148485,
        interestPaid: 280696,
        principalPaid: 65605,
        endBalance: 3082761,
    },
    {
        year: 8,
        begBalance: 3082761,
        interestPaid: 274531,
        principalPaid: 71559,
        endBalance: 3010872,
    },
    {
        year: 9,
        begBalance: 3010872,
        interestPaid: 267787,
        principalPaid: 77963,
        endBalance: 2932240,
    },
    {
        year: 10,
        begBalance: 2932240,
        interestPaid: 260411,
        principalPaid: 84630,
        endBalance: 2846230,
    },
    {
        year: 11,
        begBalance: 2846230,
        interestPaid: 252343,
        principalPaid: 94077,
        endBalance: 2752153,
    },
    {
        year: 12,
        begBalance: 2752153,
        interestPaid: 243518,
        principalPaid: 102902,
        endBalance: 2649251,
    },
    {
        year: 13,
        begBalance: 2649251,
        interestPaid: 233865,
        principalPaid: 112555,
        endBalance: 2536695,
    },
    {
        year: 14,
        begBalance: 2536695,
        interestPaid: 223306,
        principalPaid: 123114,
        endBalance: 2413581,
    },
    {
        year: 15,
        begBalance: 2413581,
        interestPaid: 211671,
        principalPaid: 134749,
        endBalance: 2279831,
    },
    {
        year: 16,
        begBalance: 2279831,
        interestPaid: 199125,
        principalPaid: 147295,
        endBalance: 2131536,
    },
    {
        year: 17,
        begBalance: 2131536,
        interestPaid: 185308,
        principalPaid: 161112,
        endBalance: 1970425,
    },
    {
        year: 18,
        begBalance: 1970425,
        interestPaid: 170194,
        principalPaid: 176226,
        endBalance: 1794199,
    },
    {
        year: 19,
        begBalance: 1794199,
        interestPaid: 153663,
        principalPaid: 192757,
        endBalance: 1605288,
    },
    {
        year: 20,
        begBalance: 1605288,
        interestPaid: 135581,
        principalPaid: 210839,
        endBalance: 1394449,
    },
    {
        year: 21,
        begBalance: 1394449,
        interestPaid: 115800,
        principalPaid: 230621,
        endBalance: 1163828,
    },
    {
        year: 22,
        begBalance: 1163828,
        interestPaid: 94191,
        principalPaid: 252251,
        endBalance: 911577,
    },
    {
        year: 23,
        begBalance: 911577,
        interestPaid: 72926,
        principalPaid: 275516,
        endBalance: 636061,
    },
    {
        year: 24,
        begBalance: 636061,
        interestPaid: 50885,
        principalPaid: 297557,
        endBalance: 338504,
    },
    {
        year: 25,
        begBalance: 338504,
        interestPaid: 16314,
        principalPaid: 330113,
        endBalance: 8300,
    },
];

const formatCurrency = (value: number) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;

export default function DebtAmortizationTable() {
    return (
        <Box mt={6}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                5-Year Amortization of Debt
            </Typography>

            <TableContainer component={Paper} elevation={1}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell>
                                <strong>Year</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Beginning Balance</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Interest Paid</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Principal Paid</strong>
                            </TableCell>
                            <TableCell align="right">
                                <strong>Ending Balance</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {amortizationData.map((row) => (
                            <TableRow key={row.year}>
                                <TableCell>{row.year}</TableCell>
                                <TableCell align="right">{formatCurrency(row.begBalance)}</TableCell>
                                <TableCell align="right">{formatCurrency(row.interestPaid)}</TableCell>
                                <TableCell align="right">{formatCurrency(row.principalPaid)}</TableCell>
                                <TableCell align="right">{formatCurrency(row.endBalance)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
