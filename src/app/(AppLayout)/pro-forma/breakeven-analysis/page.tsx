import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Divider } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import CarWashAcquisitionBudget from './CarWashAcquistionBudget';
import DebtAmortizationTable from './DebtAmortizationTable';

const breakEvenData = {
    funding: {
        totalBudget: 3000000,
        bankDebt: 1500000,
        equityInvestment: 1500000,
        loanTerms: {
            interestRate: 0.1,
            tenureYears: 3,
        },
        monthlyRevenueYr1: 1600000,
        annualGrowthRate: 0.05,
    },
    carWashVolume: {
        monthlyRetailWashes: 3600,
        monthlyMemberWashes: 1800,
        totalMonthlyWashes: 5400,
        avgWashesPerDay: 180,
        washCapacityUtilization: '75%',
    },
    profitAndCashflow: {
        yearly: [
            { year: 1, revenue: 14064000, expenses: 9044400, netProfit: 5020000, cumulativeCashflow: 5020000 },
            { year: 2, revenue: 14767200, expenses: 9160000, netProfit: 5617200, cumulativeCashflow: 10637200 },
            { year: 3, revenue: 15505560, expenses: 8500000, netProfit: 7005560, cumulativeCashflow: 17642760 },
            { year: 4, revenue: 16280838, expenses: 7500000, netProfit: 8780838, cumulativeCashflow: 26423600 },
            { year: 5, revenue: 17094880, expenses: 7800000, netProfit: 9294880, cumulativeCashflow: 35718480 },
        ],
        roiOnEquity: [
            { year: 1, equity: 1500000, netProfit: 5020000, roi: 3.35 },
            { year: 2, equity: 1500000, netProfit: 5617200, roi: 3.74 },
            { year: 3, equity: 1500000, netProfit: 7005560, roi: 4.67 },
            { year: 4, equity: 1500000, netProfit: 8780838, roi: 5.85 },
            { year: 5, equity: 1500000, netProfit: 9294880, roi: 6.2 },
        ],
    },
};

export default function BreakEvenAnalysis() {
    const { funding, profitAndCashflow, carWashVolume } = breakEvenData;

    return (
        <Box sx={{}}>
            <CarWashAcquisitionBudget />

            <DebtAmortizationTable />
        </Box>
    );
}
