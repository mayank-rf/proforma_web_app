import {
    Box,
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

const totalRevenue = [884165, 1166988, 1313617, 1348583, 1455050];
const opExPct = [59, 51, 48, 47, 45];
const totalExpensePct = [98, 80, 74, 73, 69];
const netMarginPct = [2, 20, 26, 27, 31];

export default function ProFormaIncomeChart() {
    return (
        <Card sx={{ mt: 4, mx: 'auto', maxWidth: 1000 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom textAlign="center">
                    Pro Forma Income Statement
                </Typography>

                <Box sx={{ height: 400 }}>
                    <BarChart
                        xAxis={[{ id: 'years', data: years, scaleType: 'band', label: 'Years' }]}
                        yAxis={[{ label: 'Revenue ($)', tickMinStep: 250000 }]}
                        series={[
                            {
                                data: totalRevenue,
                                label: 'Total Revenue',
                                color: '#2196F3',
                            },
                        ]}
                        width={900}
                        height={350}
                    />

                    <LineChart
                        xAxis={[{ data: years }]}
                        series={[
                            {
                                data: opExPct,
                                label: 'OpEx as % of Sales',
                                color: '#FFC107',
                                yAxisKey: 'percent',
                            },
                            {
                                data: totalExpensePct,
                                label: 'Total Expense as % of Sales',
                                color: '#F44336',
                                yAxisKey: 'percent',
                            },
                            {
                                data: netMarginPct,
                                label: 'Net Income Margin %',
                                color: '#4CAF50',
                                yAxisKey: 'percent',
                            },
                        ]}
                        yAxis={[{ id: 'percent', label: '% of Sales', min: 0, max: 100 }]}
                        width={900}
                        height={350}
                        sx={{ mt: -8 }}
                    />
                </Box>

                <Box mt={4}>
                    <Typography variant="subtitle2">Key Financials:</Typography>
                    <ul>
                        <li><strong>Net Income CAGR:</strong> <span style={{ fontWeight: 'bold' }}>129%</span></li>
                        <li><strong>Cash-on-Cash Return:</strong> <span style={{ fontWeight: 'bold' }}>1.64x</span></li>
                    </ul>
                </Box>
            </CardContent>
        </Card>
    );
}
