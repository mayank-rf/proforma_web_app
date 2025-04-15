import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Divider
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const breakEvenData = {
    funding: {
        totalBudget: 3000000,
        bankDebt: 1500000,
        equityInvestment: 1500000,
        loanTerms: {
            interestRate: 0.1,
            tenureYears: 3
        },
        monthlyRevenueYr1: 1600000,
        annualGrowthRate: 0.05
    },
    carWashVolume: {
        monthlyRetailWashes: 3600,
        monthlyMemberWashes: 1800,
        totalMonthlyWashes: 5400,
        avgWashesPerDay: 180,
        washCapacityUtilization: "75%"
    },
    profitAndCashflow: {
        yearly: [
            { year: 1, revenue: 14064000, expenses: 9044400, netProfit: 5020000, cumulativeCashflow: 5020000 },
            { year: 2, revenue: 14767200, expenses: 9160000, netProfit: 5617200, cumulativeCashflow: 10637200 },
            { year: 3, revenue: 15505560, expenses: 8500000, netProfit: 7005560, cumulativeCashflow: 17642760 },
            { year: 4, revenue: 16280838, expenses: 7500000, netProfit: 8780838, cumulativeCashflow: 26423600 },
            { year: 5, revenue: 17094880, expenses: 7800000, netProfit: 9294880, cumulativeCashflow: 35718480 }
        ],
        roiOnEquity: [
            { year: 1, equity: 1500000, netProfit: 5020000, roi: 3.35 },
            { year: 2, equity: 1500000, netProfit: 5617200, roi: 3.74 },
            { year: 3, equity: 1500000, netProfit: 7005560, roi: 4.67 },
            { year: 4, equity: 1500000, netProfit: 8780838, roi: 5.85 },
            { year: 5, equity: 1500000, netProfit: 9294880, roi: 6.2 }
        ]
    }
};

export default function BreakEvenAnalysis() {
    const { funding, profitAndCashflow, carWashVolume } = breakEvenData;

    return (
        <Box sx={{ p: 4 }}>
            <Divider sx={{ mb: 4 }} />

            {/* Funding and Car Wash Volume Section */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Funding / Total Revenue</Typography>
                        <Typography>Total Budget: ${funding.totalBudget.toLocaleString("en-US")}</Typography>
                        <Typography>Bank Debt: ${funding.bankDebt.toLocaleString("en-US")} (50%)</Typography>
                        <Typography>Equity Investment: ${funding.equityInvestment.toLocaleString("en-US")} (50%)</Typography>
                        <Typography>Loan Terms: {funding.loanTerms.interestRate * 100}% for {funding.loanTerms.tenureYears} years</Typography>
                        <Typography>Monthly Revenue (Year 1): ${funding.monthlyRevenueYr1.toLocaleString("en-US")}</Typography>
                        <Typography>YoY Revenue Growth: {(funding.annualGrowthRate * 100).toFixed(0)}%</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Monthly Car Wash Volume</Typography>
                        <Typography>Retail Washes: {carWashVolume.monthlyRetailWashes.toLocaleString("en-US")}</Typography>
                        <Typography>Member Washes: {carWashVolume.monthlyMemberWashes.toLocaleString("en-US")}</Typography>
                        <Typography>Total Monthly Washes: {carWashVolume.totalMonthlyWashes.toLocaleString("en-US")}</Typography>
                        <Typography>Avg. Washes per Day: {carWashVolume.avgWashesPerDay}</Typography>
                        <Typography>Wash Capacity Utilization: {carWashVolume.washCapacityUtilization}</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Profit & Cashflow Table */}
            <TableContainer component={Paper} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ p: 2 }}>Profit Calculation & Net Cash Flow</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Year</strong></TableCell>
                            <TableCell align="right"><strong>Revenue ($)</strong></TableCell>
                            <TableCell align="right"><strong>Expenses ($)</strong></TableCell>
                            <TableCell align="right"><strong>Net Profit ($)</strong></TableCell>
                            <TableCell align="right"><strong>Cumulative Cash Flow ($)</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {profitAndCashflow.yearly.map((row) => (
                            <TableRow key={row.year}>
                                <TableCell>Year {row.year}</TableCell>
                                <TableCell align="right">{row.revenue.toLocaleString("en-US")}</TableCell>
                                <TableCell align="right">{row.expenses.toLocaleString("en-US")}</TableCell>
                                <TableCell align="right">{row.netProfit.toLocaleString("en-US")}</TableCell>
                                <TableCell align="right">{row.cumulativeCashflow.toLocaleString("en-US")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* ROI Table & Chart */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Typography variant="h6" sx={{ p: 2 }}>Return Profile (5-Year ROI)</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Year</strong></TableCell>
                                    <TableCell align="right"><strong>Net Profit ($)</strong></TableCell>
                                    <TableCell align="right"><strong>ROI on Equity (%)</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {profitAndCashflow.roiOnEquity.map((row) => (
                                    <TableRow key={row.year}>
                                        <TableCell>Year {row.year}</TableCell>
                                        <TableCell align="right">{row.netProfit.toLocaleString("en-US")}</TableCell>
                                        <TableCell align="right">{(row.roi * 100).toFixed(0)}%</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        ROI Trend (Line Chart)
                    </Typography>
                    <LineChart
                        height={300}
                        xAxis={[{ scaleType: 'band', data: profitAndCashflow.roiOnEquity.map(row => `Year ${row.year}`) }]}
                        series={[{ data: profitAndCashflow.roiOnEquity.map(row => row.roi * 100), label: 'ROI (%)' }]}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
