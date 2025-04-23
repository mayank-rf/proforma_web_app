import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function OpexTable({ operatingCosts }) {
    const totalDebtYear1 = 346420;
    const totalDebtYear3 = 346420;
    const totalDebtYear5 = 346420;

    const totalOperatingYear1 = operatingCosts.reduce((sum, item) => sum + item.year1, 0);
    const totalOperatingYear3 = operatingCosts.reduce((sum, item) => sum + item.year3, 0);
    const totalOperatingYear5 = operatingCosts.reduce((sum, item) => sum + item.year5, 0);

    const totalExpenseYear1 = totalOperatingYear1 + totalDebtYear1;
    const totalExpenseYear3 = totalOperatingYear3 + totalDebtYear3;
    const totalExpenseYear5 = totalOperatingYear5 + totalDebtYear5;

    return (
        <TableContainer sx={{ mt: 0 }}>
            <Typography variant="body1" sx={{ px: 2, pt: 1, pb: 2, m: 2, boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}>
                Over the years, operating expenses are expected to rise driven by labor, utility, and chemistry costs. Despite these increases, the
                profit margin notably expands to 31% from 2%
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Category</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>Year 1</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>Year 3</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>Year 5</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operatingCosts.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row.category}</TableCell>
                            <TableCell align="right">
                                {idx === 0 && '$'}
                                {row.year1.toLocaleString('en-US')}
                            </TableCell>
                            <TableCell align="right">
                                {idx === 0 && '$'}
                                {row.year3.toLocaleString('en-US')}
                            </TableCell>
                            <TableCell align="right">
                                {idx === 0 && '$'}
                                {row.year5.toLocaleString('en-US')}
                            </TableCell>
                        </TableRow>
                    ))}

                    {/* Total Operating Expense Row */}
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell>
                            <strong>Total Operating Expense</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>{totalOperatingYear1.toLocaleString('en-US')}</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>{totalOperatingYear3.toLocaleString('en-US')}</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>{totalOperatingYear5.toLocaleString('en-US')}</strong>
                        </TableCell>
                    </TableRow>

                    {/* Total Debt Payments */}
                    <TableRow>
                        <TableCell>Total Debt Payments</TableCell>
                        <TableCell align="right">${totalDebtYear1.toLocaleString('en-US')}</TableCell>
                        <TableCell align="right">${totalDebtYear3.toLocaleString('en-US')}</TableCell>
                        <TableCell align="right">${totalDebtYear5.toLocaleString('en-US')}</TableCell>
                    </TableRow>

                    {/* Total Expense */}
                    <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                        <TableCell>
                            <strong>Total Expense</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>${totalExpenseYear1.toLocaleString('en-US')}</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>${totalExpenseYear3.toLocaleString('en-US')}</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>${totalExpenseYear5.toLocaleString('en-US')}</strong>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
