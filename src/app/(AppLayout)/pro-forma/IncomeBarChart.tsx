'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMediaQuery, Box, useTheme } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const IncomeBarChart = () => {
    const initialIncome = 16338;
    const cagr = 0.103;
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

    const incomeData = [initialIncome, 230748, 341908, 368416, 449130];

    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    const data: ChartData<'bar'> = {
        labels: years,
        datasets: [
            {
                label: 'Net Income ($)',
                data: incomeData,
                backgroundColor: '#23679D',
                borderRadius: 6,
                barThickness: isTabletOrSmaller ? 50 : 100, // Dynamic thickness
                datalabels: {
                    align: 'top',
                    anchor: 'end',
                    formatter: (value: number) => `$${value.toLocaleString('en-US')}`,
                    color: '#3A4F5F',
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 10 : 18, // Smaller font for mobile
                    },
                },
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#3A4F5F', // Match datalabels color
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 10 : 18, // Match datalabels font size
                    },
                    padding: 20,
                },
            },
            datalabels: {
                display: true,
                align: 'top',
                anchor: 'end',
                formatter: (value: number) => `$${value.toLocaleString('en-US')}`,
                color: '#3A4F5F',
                font: {
                    weight: 'bold',
                    size: isTabletOrSmaller ? 10 : 18,
                },
            },
            tooltip: {
                callbacks: {
                    label: (context: any) =>
                        `$${context.raw.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}`,
                },
            },
        },
        scales: {
            y: {
                display: false,
                grid: {
                    display: false,
                },
                max: 500000,
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#3A4F5F', // Match datalabels/legend color
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 10 : 18, // Responsive size
                    },
                },
            },
        },
    };

    return (
        <Box
            sx={{
                height: { xs: 250, sm: 350, md: 400, lg: 400 }, // Adjust height based on screen size
                width: '100%',
                overflowX: 'auto', // Prevent layout break on very small screens
                p: 1,
            }}
        >
            <Bar data={data} options={options} height={100} />
        </Box>
    );
};

export default IncomeBarChart;
