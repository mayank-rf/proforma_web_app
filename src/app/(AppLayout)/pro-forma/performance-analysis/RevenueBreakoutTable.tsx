'use client';

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const data = [
    { year: 'Year 1', retail: '$795,749', member: '$88,417' },
    { year: 'Year 2', retail: '$933,590', member: '$233,398' },
    { year: 'Year 3', retail: '$985,213', member: '$328,404' },
    { year: 'Year 4', retail: '$944,008', member: '$404,575' },
    { year: 'Year 5', retail: '$982,125', member: '$472,875' },
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
