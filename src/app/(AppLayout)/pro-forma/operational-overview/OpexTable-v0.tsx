import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

// Simulated annual sales for calculation
const year1Sales = 250000;
const year3Sales = 300000;

const operatingCosts = [
  { category: "Advertisements & Promotions", year1: 12000, year3: 14000 },
  { category: "Chemical Supplies", year1: 15000, year3: 16000 },
  { category: "Consumables (soap, wax, etc.)", year1: 20000, year3: 22000 },
  { category: "Utilities", year1: 35000, year3: 38000 },
  { category: "Labor", year1: 120000, year3: 135000 },
  { category: "Property Repairs & Maintenance", year1: 10000, year3: 12000 },
  { category: "Customer Claims", year1: 3000, year3: 3500 },
  { category: "Professional & Legal Fees", year1: 5000, year3: 5500 },
  { category: "Marketing & Miscellaneous", year1: 15000, year3: 18000 },
];

// Simulated debt payments
const totalDebtYear1 = 25000;
const totalDebtYear3 = 20000;

const totalOperatingYear1 = operatingCosts.reduce((sum, item) => sum + item.year1, 0);
const totalOperatingYear3 = operatingCosts.reduce((sum, item) => sum + item.year3, 0);

const totalExpenseYear1 = totalOperatingYear1 + totalDebtYear1;
const totalExpenseYear3 = totalOperatingYear3 + totalDebtYear3;

export default function OpexTable() {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
        Operating Expense Forecast
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell align="right"><strong>Year 1 ($)</strong></TableCell>
            <TableCell align="right"><strong>% of Sales</strong></TableCell>
            <TableCell align="right"><strong>Year 3 ($)</strong></TableCell>
            <TableCell align="right"><strong>% of Sales</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operatingCosts.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{row.year1.toLocaleString("en-US")}</TableCell>
              <TableCell align="right">{((row.year1 / year1Sales) * 100).toFixed(1)}%</TableCell>
              <TableCell align="right">{row.year3.toLocaleString("en-US")}</TableCell>
              <TableCell align="right">{((row.year3 / year3Sales) * 100).toFixed(1)}%</TableCell>
            </TableRow>
          ))}

          {/* Total Operating Expense Row */}
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell><strong>Total Operating Expense</strong></TableCell>
            <TableCell align="right"><strong>{totalOperatingYear1.toLocaleString("en-US")}</strong></TableCell>
            <TableCell align="right"><strong>{((totalOperatingYear1 / year1Sales) * 100).toFixed(1)}%</strong></TableCell>
            <TableCell align="right"><strong>{totalOperatingYear3.toLocaleString("en-US")}</strong></TableCell>
            <TableCell align="right"><strong>{((totalOperatingYear3 / year3Sales) * 100).toFixed(1)}%</strong></TableCell>
          </TableRow>

          {/* Total Debt Payments */}
          <TableRow>
            <TableCell><strong>Total Debt Payments</strong></TableCell>
            <TableCell align="right">{totalDebtYear1.toLocaleString("en-US")}</TableCell>
            <TableCell align="right">{((totalDebtYear1 / year1Sales) * 100).toFixed(1)}%</TableCell>
            <TableCell align="right">{totalDebtYear3.toLocaleString("en-US")}</TableCell>
            <TableCell align="right">{((totalDebtYear3 / year3Sales) * 100).toFixed(1)}%</TableCell>
          </TableRow>

          {/* Total Expense */}
          <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
            <TableCell><strong>Total Expense</strong></TableCell>
            <TableCell align="right"><strong>{totalExpenseYear1.toLocaleString("en-US")}</strong></TableCell>
            <TableCell align="right"><strong>{((totalExpenseYear1 / year1Sales) * 100).toFixed(1)}%</strong></TableCell>
            <TableCell align="right"><strong>{totalExpenseYear3.toLocaleString("en-US")}</strong></TableCell>
            <TableCell align="right"><strong>{((totalExpenseYear3 / year3Sales) * 100).toFixed(1)}%</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
