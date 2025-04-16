'use client';

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

const data = [
    { year: 'Year 1', retail: '[ ]', member: '[ ]' },
    { year: 'Year 2', retail: '[ ]', member: '[ ]' },
    { year: 'Year 3', retail: '[ ]', member: '[ ]' },
    { year: 'Year 4', retail: '[ ]', member: '[ ]' },
    { year: 'Year 5', retail: '[ ]', member: '[ ]' },
];

export default function RevenueBreakoutTable() {
    return (
        <Box mt={4}>
            <TableContainer component={Paper} elevation={0}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center" sx={{ fontStyle: 'italic', fontWeight: 500 }}>
                                Average Retail Price / Wash
                            </TableCell>
                            <TableCell align="center" sx={{ fontStyle: 'italic', fontWeight: 500 }}>
                                Avg. Member Price / Wash
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell sx={{ fontWeight: 600 }}>{row.year}</TableCell>
                                <TableCell align="center">{row.retail}</TableCell>
                                <TableCell align="center" sx={{ bgcolor: '#f5f5f5' }}>
                                    {row.member}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
