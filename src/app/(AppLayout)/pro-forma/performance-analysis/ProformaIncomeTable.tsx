'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Box } from '@mui/material';

const data = [
    {
        year: 'Year 1',
        revenueGrowth: 'N/A',
        netIncome: '$16,338',
        roe: '2%',
        netIncomeCAGR: null,
        cashOnCashReturn: null,
    },
    {
        year: 'Year 2',
        revenueGrowth: '32%',
        netIncome: '$230,748',
        roe: '27%',
        netIncomeCAGR: null,
        cashOnCashReturn: null,
    },
    {
        year: 'Year 3',
        revenueGrowth: '13%',
        netIncome: '$341,908',
        roe: '40%',
        netIncomeCAGR: null,
        cashOnCashReturn: null,
    },
    {
        year: 'Year 4',
        revenueGrowth: '3%',
        netIncome: '$368,416',
        roe: '43%',
        netIncomeCAGR: null,
        cashOnCashReturn: null,
    },
    {
        year: 'Year 5',
        revenueGrowth: '7%',
        netIncome: '$449,130',
        roe: '52%',
        netIncomeCAGR: '129%',
        cashOnCashReturn: '1.64x',
    },
];

export default function ProFormaIncomeTableTransposed() {
    return (
        <Box mb={4}>
            <TableContainer sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {data.map((row, index) => (
                                <TableCell key={index} align="center" sx={{ fontWeight: 'bold' }}>
                                    {row.year}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic' }}>Revenue Growth %</TableCell>
                            {data.map((row, index) => (
                                <TableCell key={index} align="center">
                                    {row.revenueGrowth}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic' }}>Net Income</TableCell>
                            {data.map((row, index) => (
                                <TableCell key={index} align="center">
                                    {row.netIncome}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic' }}>ROE %</TableCell>
                            {data.map((row, index) => (
                                <TableCell key={index} align="center">
                                    {row.roe}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>Net Income CAGR %</TableCell>
                            {data.map((row, index) => (
                                <TableCell key={index} align="center" sx={{ fontWeight: 'bold' }}>
                                    {row.netIncomeCAGR}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>Cash-on-Cash Return</TableCell>
                            {data.map((row, index) => (
                                <TableCell key={index} align="center" sx={{ fontWeight: 'bold' }}>
                                    {row.cashOnCashReturn}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
