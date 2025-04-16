import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box, Stack } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const labels = [
    'Advertisements & Promotions',
    'Chemical Supplies',
    'Consumables',
    'Utilities',
    'Labor',
    'Repairs & Maintenance',
    'Customer Claims',
    'Legal & Professional Fees',
    'Marketing & Miscellaneous',
];

const backgroundColors = ['#27AE60', '#2D9CDB', '#F2994A', '#9B51E0', '#EB5757', '#2AD2C9', '#F2C94C', '#F5A623', '#7B5E57'];

const OperatingExpensePieChart = ({ percentValues }: any) => {
    const data = {
        labels: [
            'Advertisements & Promotions',
            'Chemical Supplies',
            'Consumables',
            'Utilities',
            'Labor',
            'Repairs & Maintenance',
            'Customer Claims',
            'Legal & Professional Fees',
            'Marketing & Miscellaneous',
        ],
        datasets: [
            {
                data: percentValues,
                backgroundColor: ['#27AE60', '#2D9CDB', '#F2994A', '#9B51E0', '#EB5757', '#2AD2C9', '#F2C94C', '#F5A623', '#7B5E57'],
                borderWidth: 1,
                clip: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                display: true,
                color: '#fff',
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
                        const value = context.parsed;
                        return `${label}: ${value.toFixed(1)}%`;
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
                            {label} ({percentValues[index]}%)
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
