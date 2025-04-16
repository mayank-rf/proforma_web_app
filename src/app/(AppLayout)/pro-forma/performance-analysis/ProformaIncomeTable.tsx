'use client';

import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography, Paper, Box
} from '@mui/material';

const data = [
    {
        year: 'Year 1',
        revenueGrowth: 'N/A',
        netIncome: '$16,338',
        roe: '2%',
    },
    {
        year: 'Year 2',
        revenueGrowth: '32%',
        netIncome: '$230,748',
        roe: '27%',
    },
    {
        year: 'Year 3',
        revenueGrowth: '13%',
        netIncome: '$341,908',
        roe: '40%',
    },
    {
        year: 'Year 4',
        revenueGrowth: '3%',
        netIncome: '$368,416',
        roe: '43%',
    },
    {
        year: 'Year 5',
        revenueGrowth: '7%',
        netIncome: '$449,130',
        roe: '52%',
    },
];

export default function ProFormaIncomeTable() {
    return (
        <Box mt={4}>
            <TableContainer component={Paper} elevation={0}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center" sx={{ fontStyle: 'italic' }}>Revenue Growth %</TableCell>
                            <TableCell align="center" sx={{ fontStyle: 'italic' }}>Net Income</TableCell>
                            <TableCell align="center" sx={{ fontStyle: 'italic' }}>ROE %</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ fontWeight: 'bold' }}>{row.year}</TableCell>
                                <TableCell align="center">{row.revenueGrowth}</TableCell>
                                <TableCell align="center">{row.netIncome}</TableCell>
                                <TableCell align="center">{row.roe}</TableCell>
                            </TableRow>
                        ))}

                        {/* Net Income CAGR */}
                        <TableRow>
                            <TableCell colSpan={4} align="center" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                                Net Income CAGR %: <span style={{ fontWeight: 'bold' }}>129%</span>
                            </TableCell>
                        </TableRow>

                        {/* Cash-on-Cash Return */}
                        <TableRow>
                            <TableCell colSpan={4} align="center" sx={{ fontStyle: 'italic' }}>
                                Cash-on-Cash Return:&nbsp;
                                <span style={{ fontWeight: 'bold' }}>1.64x</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
