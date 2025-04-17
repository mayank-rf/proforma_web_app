'use client';

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
    Divider,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import CarWashAcquisitionBudget from './CarWashAcquistionBudget';
import DebtAmortizationTable from './DebtAmortizationTable';
import InvestmentPieChart from './InvestmentDistribution';

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
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={{}}>
            <Typography variant="h4" fontWeight={600} textAlign="center" mb={2} sx={{ fontSize: isTabletOrSmaller ? 18 : 24, color: 'primary.main' }}>
                Car Wash Acquisition Budget
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Stack direction="column" justifyContent="center" alignItems="center" gap={4}>
                        <Box sx={{ mt: isTabletOrSmaller ? 0 : 2, boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', p: 2 }}>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae ullam quibusdam! Autem minus, deserunt quos
                                cumque non soluta qui a sapiente neque. Rerum eos fugit fuga aspernatur voluptatem hic. Temporibus quas quibusdam sit
                                tenetur non, possimus ab a quasi qui molestias distinctio molestiae. Voluptatem officia cum repudiandae expedita,
                                assumenda quos saepe nobis doloremque. Quae hic deserunt veniam officiis laudantium?
                            </Typography>
                        </Box>

                        <CarWashAcquisitionBudget />
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <InvestmentPieChart />
                </Grid>
            </Grid>

            <DebtAmortizationTable />
        </Box>
    );
}
