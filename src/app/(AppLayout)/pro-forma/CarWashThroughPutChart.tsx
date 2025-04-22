'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMediaQuery, useTheme } from '@mui/material';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const CarWashThroughPutChart = () => {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
    const maxVolumes = [30000, 35000, 42000, 47000, 53000];

    const data: ChartData<'bar'> = {
        labels: years,
        datasets: [
            {
                label: 'Max Car Volume',
                data: maxVolumes,
                backgroundColor: '#4CAF50',
                borderRadius: 6,
                barThickness: isTabletOrSmaller ? 50 : 100,
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: (value: number) => `${value.toLocaleString()}`,
                    color: '#3A4F5F',
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 12 : 18,
                    },
                },
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
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
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.raw.toLocaleString('en-US')}`,
                },
            },
            datalabels: {
                color: '#000',
            },
        },
        scales: {
            y: {
                display: false, // Hide Y axis if desired
                grid: { display: false },
            },
            x: {
                title: {
                    display: false,
                    text: 'Year',
                },
                grid: { display: false },
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

    return <Bar data={data} options={options} plugins={[ChartDataLabels]} height={100} />;
};

export default CarWashThroughPutChart;
