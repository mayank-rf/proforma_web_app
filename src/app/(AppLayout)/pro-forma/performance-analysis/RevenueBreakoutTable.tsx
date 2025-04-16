'use client';

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const data = [
    { year: 'Year 1', retail: '[ ]', member: '[ ]' },
    { year: 'Year 2', retail: '[ ]', member: '[ ]' },
    { year: 'Year 3', retail: '[ ]', member: '[ ]' },
    { year: 'Year 4', retail: '[ ]', member: '[ ]' },
    { year: 'Year 5', retail: '[ ]', member: '[ ]' },
];

export default function RevenueBreakoutTableTransposed() {
    return (
        <Box sx={{ mb: 2 }}>
            <TableContainer sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {data.map((row, index) => (
                                <TableCell key={index} align="center" sx={{ fontWeight: 600 }}>
                                    {row.year}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic', fontWeight: 500 }}>Avg. Retail Price / Wash</TableCell>
                            {data.map((row, idx) => (
                                <TableCell key={idx} align="center">
                                    {row.retail}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic', fontWeight: 500 }}>Avg. Member Price / Wash</TableCell>
                            {data.map((row, idx) => (
                                <TableCell key={idx} align="center">
                                    {row.member}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
