import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Simulated annual sales (optional - not used since % is removed)
const year1Sales = 250000;
const year3Sales = 300000;
const year5Sales = 350000;

const operatingCosts = [
    { category: 'Advertisements & Promotions', year1: 12000, year3: 14000, year5: 16000 },
    { category: 'Chemical Supplies', year1: 15000, year3: 16000, year5: 17000 },
    { category: 'Consumables (soap, wax, etc.)', year1: 20000, year3: 22000, year5: 25000 },
    { category: 'Utilities', year1: 35000, year3: 38000, year5: 40000 },
    { category: 'Labor', year1: 120000, year3: 135000, year5: 150000 },
    { category: 'Property Repairs & Maintenance', year1: 10000, year3: 12000, year5: 14000 },
    { category: 'Customer Claims', year1: 3000, year3: 3500, year5: 4000 },
    { category: 'Professional & Legal Fees', year1: 5000, year3: 5500, year5: 6000 },
    { category: 'Marketing & Miscellaneous', year1: 15000, year3: 18000, year5: 20000 },
];

const totalDebtYear1 = 25000;
const totalDebtYear3 = 20000;
const totalDebtYear5 = 15000;

const totalOperatingYear1 = operatingCosts.reduce((sum, item) => sum + item.year1, 0);
const totalOperatingYear3 = operatingCosts.reduce((sum, item) => sum + item.year3, 0);
const totalOperatingYear5 = operatingCosts.reduce((sum, item) => sum + item.year5, 0);

const totalExpenseYear1 = totalOperatingYear1 + totalDebtYear1;
const totalExpenseYear3 = totalOperatingYear3 + totalDebtYear3;
const totalExpenseYear5 = totalOperatingYear5 + totalDebtYear5;

export default function OpexTable() {
    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Category</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>Year 1 ($)</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>Year 3 ($)</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>Year 5 ($)</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operatingCosts.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row.category}</TableCell>
                            <TableCell align="right">{row.year1.toLocaleString('en-US')}</TableCell>
                            <TableCell align="right">{row.year3.toLocaleString('en-US')}</TableCell>
                            <TableCell align="right">{row.year5.toLocaleString('en-US')}</TableCell>
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
                        <TableCell>
                            <strong>Total Debt Payments</strong>
                        </TableCell>
                        <TableCell align="right">{totalDebtYear1.toLocaleString('en-US')}</TableCell>
                        <TableCell align="right">{totalDebtYear3.toLocaleString('en-US')}</TableCell>
                        <TableCell align="right">{totalDebtYear5.toLocaleString('en-US')}</TableCell>
                    </TableRow>

                    {/* Total Expense */}
                    <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                        <TableCell>
                            <strong>Total Expense</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>{totalExpenseYear1.toLocaleString('en-US')}</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>{totalExpenseYear3.toLocaleString('en-US')}</strong>
                        </TableCell>
                        <TableCell align="right">
                            <strong>{totalExpenseYear5.toLocaleString('en-US')}</strong>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Typography variant="body1" sx={{ px: 2, pt: 1, pb: 2 }}>
                Over the years, operating expenses are expected to rise from ${totalOperatingYear1.toLocaleString('en-US')} in Year 1 to $
                {totalOperatingYear5.toLocaleString('en-US')} by Year 5, largely driven by labor and utility costs. Despite increased revenue, expense
                control remains stable with a consistent structure of cost categories.
            </Typography>
        </TableContainer>
    );
}
