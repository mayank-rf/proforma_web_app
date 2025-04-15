'use client';

import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    LinearProgress,
    Stack,
} from '@mui/material';
import { BarChart, BarPlot, ChartsLegend, ChartsXAxis, ChartsYAxis, LineChart, LinePlot, ResponsiveChartContainer } from '@mui/x-charts';
import FinancialKPITable from './FinancialKpiTable';
import OperationalKPITable from './OperationalKpiTable';
import RevenueCustomerKPITable from './RevenueKpiTable';
import ProFormaIncomeChart from './ProformaIncomeChart';

const profitForecast = [
    { year: "Year 1", revenue: 15000, expense: 6000 },
    { year: "Year 2", revenue: 18000, expense: 8000 },
    { year: "Year 3", revenue: 22000, expense: 10000 },
    { year: "Year 4", revenue: 26000, expense: 11000 },
    { year: "Year 5", revenue: 30000, expense: 12000 },
];

const years = profitForecast.map(d => d.year);

const revenueData = profitForecast.map(d => d.revenue);
const expenseData = profitForecast.map(d => d.expense);
const profitData = profitForecast.map(d => d.revenue - d.expense);

const trafficData = [
    { year: "Year 1", totalVolume: 2000, memberVolume: 500 },
    { year: "Year 2", totalVolume: 3000, memberVolume: 1200 },
    { year: "Year 3", totalVolume: 5000, memberVolume: 2500 },
    { year: "Year 4", totalVolume: 7000, memberVolume: 4000 },
    { year: "Year 5", totalVolume: 9000, memberVolume: 6000 },
];

const chartData = trafficData.map(({ year, totalVolume, memberVolume }) => ({
    year,
    memberVolume,
    nonMemberVolume: totalVolume - memberVolume,
}));

const revenueGraphData = [
    { year: "Year 1", memberShipRevenue: 15000, retailRevenue: 6000 },
    { year: "Year 2", memberShipRevenue: 18000, retailRevenue: 8000 },
    { year: "Year 3", memberShipRevenue: 22000, retailRevenue: 10000 },
    { year: "Year 4", memberShipRevenue: 26000, retailRevenue: 11000 },
    { year: "Year 5", memberShipRevenue: 30000, retailRevenue: 12000 },
]


export default function KPIAnalysis() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 1 }}>
            {/* Pro Forma Income Statement */}
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Pro Forma Income Statement
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={4}>
                            <FinancialKPITable />
                        </Grid>
                        <Grid item xs={8}>
                            {/* <ResponsiveChartContainer
                                series={[
                                    { type: 'bar', data: revenueData, label: 'Revenue', color: 'rgba(33, 150, 243, 0.5)', },
                                    { type: 'line', data: profitData, label: 'Profit', color: 'rgba(76, 175, 80, 1)' },
                                    { type: 'line', data: expenseData, label: 'Expense', color: '#f44336' },
                                ]}
                                xAxis={[
                                    {
                                        id: 'years',
                                        data: years,
                                        scaleType: 'band',
                                    },
                                ]}
                                yAxis={[
                                    {
                                        valueFormatter: (value) => `$${value.toLocaleString()}`,
                                    },
                                ]}
                                height={400}
                                width={1000}
                                sx={{
                                    padding: 1
                                }}
                            >
                                <BarPlot />
                                <LinePlot />
                                <ChartsXAxis position="bottom" axisId="years" />
                                <ChartsYAxis position="left" />
                                <ChartsLegend />
                            </ResponsiveChartContainer> */}

                            <ProFormaIncomeChart />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Revenue Breakout */}
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Revenue Breakout
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={4}>
                            <OperationalKPITable />
                        </Grid>
                        <Grid item xs={8}>
                            <BarChart
                                height={400}
                                width={1000}
                                xAxis={[{ scaleType: 'band', data: chartData.map(d => d.year) }]}
                                series={[
                                    {
                                        data: chartData.map(d => d.memberVolume),
                                        label: 'Member Volume',
                                        stack: 'total', // Enables stacking
                                        color: '#FF9800',
                                    },
                                    {
                                        data: chartData.map(d => d.nonMemberVolume),
                                        label: 'Retail Volume',
                                        stack: 'total', // Stack on top of member volume
                                        color: '#1976d2',
                                    },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Car Wash Volume Estimates */}
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Car Wash Volumne Estimates
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={4}>
                            <RevenueCustomerKPITable />
                        </Grid>
                        <Grid item xs={8}>
                            <BarChart
                                height={400}
                                width={1000}
                                xAxis={[{ scaleType: 'band', data: revenueGraphData.map(d => d.year) }]}
                                yAxis={[
                                    {
                                        valueFormatter: (value) => `$${value.toLocaleString()}`, // Format Y-axis with dollar sign and commas
                                    },
                                ]}
                                series={[
                                    { data: revenueGraphData.map(d => d.memberShipRevenue), label: 'Revenue from Membership', stack: 'total', color: 'rgba(255, 152, 0, 0.85)' },
                                    { data: revenueGraphData.map(d => d.retailRevenue), label: 'Revenue from Retail', stack: 'total', color: 'rgba(25, 118, 210, 0.85)' },
                                ]}
                                barLabel={(params) => {
                                    return params.value ? `$${params.value}` : 'XX';
                                }}
                                sx={{
                                    padding: 1
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}
