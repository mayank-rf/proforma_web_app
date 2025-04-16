'use client';

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

const data = [
    { year: 'Year 1', retail: '[ ]', member: '[ ]' },
    { year: 'Year 2', retail: '[ ]', member: '[ ]' },
    { year: 'Year 3', retail: '[ ]', member: '[ ]' },
    { year: 'Year 4', retail: '[ ]', member: '[ ]' },
    { year: 'Year 5', retail: '[ ]', member: '[ ]' },
];

export default function CarWashVolumeTableTransposed() {
    return (
        <Box mb={2}>
            <TableContainer component={Paper} sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {data.map((row, idx) => (
                                <TableCell key={idx} align="center" sx={{ fontWeight: 600, fontSize: 16 }}>
                                    {row.year}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic', fontWeight: 500 }}>Average Retail Washes / Month</TableCell>
                            {data.map((row, idx) => (
                                <TableCell key={idx} align="center">
                                    {row.retail}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontStyle: 'italic', fontWeight: 500 }}>Avg. Member Washes / Month</TableCell>
                            {data.map((row, idx) => (
                                <TableCell key={idx} align="center">
                                    {row.member}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="body1" color="#3A4F5F" sx={{ fontSize: 18, fontWeight: '500' }} align="left" mt={2}>
                Breaking even in year 1 requires washing <b>5,072</b> per month assuming ~<b>$14</b> revenue per car.
            </Typography>
        </Box>
    );
}
