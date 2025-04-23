import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box, Stack } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const backgroundColors = [
    '#0B3C5D', // Deep Navy Blue
    '#1D4E89', // Dark Royal Blue
    '#23679D', // Base Blue
    '#2C7AB5', // Strong Blue
    '#3790CD', // Bold Sky Blue
    '#46A7E7', // Medium Ice Blue
    '#64CAFF', // Light Blue
    '#A0D8F1', // Soft Sky Blue
    '#C3E6FF', // Very Light Blue
    '#1E5F74', // Teal-Blue
    '#4C85A2', // Muted Blue-Gray
    '#90B4D4', // Powdery Blue
];

const OperatingExpensePieChart = ({ operatingCostsData }: any) => {
    const labels = operatingCostsData.map((item) => item.category);

    const data: ChartData<'pie'> = {
        labels,
        datasets: [
            {
                data: operatingCostsData.map((item) => item.data.percentOfSales),
                backgroundColor: backgroundColors,
                borderWidth: 1,
                clip: false,
            },
        ],
    };

    const options: ChartOptions<'pie'> = {
        responsive: true,
        layout: {
            padding: {
                left: 40,
                right: 40,
            },
        },
        plugins: {
            datalabels: {
                display: true,
                font: {
                    weight: 'bold',
                    size: 13,
                },
                align: (context: any) => {
                    const value = context.dataset.data[context.dataIndex];
                    return value < 4 ? 'end' : 'center';
                },
                anchor: (context: any) => {
                    const value = context.dataset.data[context.dataIndex];
                    return value < 4 ? 'end' : 'center';
                },
                color: (context: any) => {
                    const value = context.dataset.data[context.dataIndex];
                    return value < 4 ? '#3A4F5F' : '#fff'; // black text for external labels
                },
                formatter: (value: number) => `${value.toFixed(1)}%`,
            },
            legend: {
                display: false,
                position: 'top' as const,
                labels: {},
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        const label = context.label || '';
                        const categoryMap = {};

                        operatingCostsData.forEach((x) => (categoryMap[x.category] = x.data.amount));

                        const amount = categoryMap[label] || 0;
                        const formattedAmount = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0,
                        }).format(amount);

                        return `${label}: ${formattedAmount}`;
                    },
                },
            },
        },
    };

    return (
        <Stack direction="column" gap={6} p={4} justifyContent="center" alignItems="center">
            {/* Legend Section */}
            <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', margin: 'auto' }}>
                {labels.map((label, index) => (
                    <Box key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Box
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: backgroundColors[index],
                            }}
                        />
                        <span style={{ fontSize: '14px' }}>
                            {label} ({operatingCostsData[index].data.percentOfSales}%)
                        </span>
                    </Box>
                ))}
            </Box>

            {/* Chart Section */}
            <Box sx={{ width: 500, height: 500 }}>
                <Pie data={data} options={options} />
            </Box>
        </Stack>
    );
};

export default OperatingExpensePieChart;
