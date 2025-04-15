import { Box, Card, CardContent, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

// Year 1 operating costs data
const operatingCosts = [
    { category: "Advertisements & Promotions", cost: 12000 },
    { category: "Chemical Supplies", cost: 15000 },
    { category: "Consumables", cost: 20000 },
    { category: "Utilities", cost: 35000 },
    { category: "Labor", cost: 120000 },
    { category: "Repairs & Maintenance", cost: 10000 },
    { category: "Customer Claims", cost: 3000 },
    { category: "Legal & Professional Fees", cost: 5000 },
    { category: "Marketing & Misc.", cost: 15000 },
];

// Custom color palette
const pieColors = [
    '#4CAF50',  // Green
    '#2196F3',  // Blue
    '#FF9800',  // Orange
    '#9C27B0',  // Purple
    '#F44336',  // Red
    '#00BCD4',  // Cyan
    '#8BC34A',  // Light Green
    '#FFC107',  // Amber
    '#795548',  // Brown
];

// Transform data for PieChart
const pieData = operatingCosts.map((item, index) => ({
    id: index,
    value: item.cost,
    label: item.category,
    color: pieColors[index % pieColors.length], // cycle through colors
}));

export default function OpexCompositionChart() {
    return (
        <Card sx={{ margin: 'auto' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom align="center">
                    Operating Expense Composition – Year 3
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PieChart
                        series={[
                            {
                                data: pieData,
                                innerRadius: 0,
                                outerRadius: 150,
                                paddingAngle: 1,
                                cornerRadius: 3,
                            },
                        ]}
                        margin={{
                            left: 50,
                            right: 50,
                            top: -500,
                            bottom: -200,
                        }}
                        width={600}
                        height={757}
                        slotProps={{
                            legend: {
                                direction: 'column',
                                position: {
                                    horizontal: 'middle',
                                    vertical: 'bottom',
                                },
                                padding: {
                                    bottom: 80,
                                }
                            },
                        }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
