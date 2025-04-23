import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const retailRevenue = [795749, 933590, 985213, 944008, 982125];
const memberRevenue = [88417, 233398, 328404, 404575, 472875];

const RevenueBreakoutChart = () => {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

    const data: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: 'Retail Revenue',
                data: retailRevenue,
                backgroundColor: '#2D9CDB',
                barThickness: isTabletOrSmaller ? 80 : 100,
                stack: 'revenue',
                datalabels: {
                    formatter: (value: number) => `$${value.toLocaleString('en-US')}`,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 12 : 16,
                    },
                },
            },
            {
                label: 'Member Revenue',
                data: memberRevenue,
                backgroundColor: '#174E8C',
                barThickness: isTabletOrSmaller ? 80 : 100,
                stack: 'revenue',
                datalabels: {
                    formatter: (value: number) => `$${value.toLocaleString('en-US')}`,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 12 : 16,
                    },
                },
            },
            {
                label: '',
                data: memberRevenue,
                backgroundColor: 'transparent',
                stack: 'revenue',
                datalabels: {
                    formatter: (value: number, context: any) => {
                        const retail = retailRevenue[context.dataIndex];
                        const member = value;
                        const total = retail + member;
                        return [`$${total.toLocaleString('en-US')}`];
                    },
                    color: '#000',
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 12 : 16,
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
                    label: function (context: any) {
                        const value = context.raw;
                        return `${context.dataset.label}: $${value.toLocaleString()}`;
                    },
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: { drawOnChartArea: false },
                ticks: {
                    color: '#3A4F5F', // Match datalabels/legend color
                    font: {
                        weight: 'bold',
                        size: isTabletOrSmaller ? 10 : 18, // Responsive size
                    },
                },
            },
            y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                    callback: function (value: number) {
                        return `$${value.toLocaleString()}`;
                    },
                },
                title: {
                    display: true,
                    text: 'Revenue ($)',
                },
                grid: { drawOnChartArea: false },
                display: false,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default RevenueBreakoutChart;
