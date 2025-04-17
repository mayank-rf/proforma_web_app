'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box, Stack } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

// Input data
const labels = ['Building', 'Equipment', 'Land', 'Site', 'Soft Costs'];
const backgroundColors = ['#2b7dbf', '#f77b2b', '#1b6f32', '#00b6c4', '#b455a0'];
const rawValues = [1500000, 1500000, 800000, 250000, 250000];

// Calculate percentage values
const total = rawValues.reduce((sum, val) => sum + val, 0);
const percentValues = rawValues.map((value) => ((value / total) * 100).toFixed(1));

const data = {
    labels,
    datasets: [
        {
            data: rawValues,
            backgroundColor: backgroundColors,
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }, // Hide default legend
        datalabels: {
            color: '#fff',
            formatter: (value: number, context: any) => {
                const total = context.chart.data.datasets[0].data.reduce((acc: number, val: number) => acc + val, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${percentage}%`;
            },
            font: {
                weight: 'bold' as const,
                size: 13,
            },
        },
    },
};

const InvestmentPieChart = () => {
    return (
        <Stack direction="column" gap={2} mt={2} justifyContent="center" alignItems="center">
            {/* Legend Section */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                {labels.map((label, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Box
                            sx={{
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
            <Box sx={{ width: 400, height: 400 }}>
                <Pie data={data} options={options} />
            </Box>
        </Stack>
    );
};

export default InvestmentPieChart;
