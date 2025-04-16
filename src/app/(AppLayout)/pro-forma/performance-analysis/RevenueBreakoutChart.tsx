import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueBreakoutChart = () => {
    const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Retail Revenue',
                data: [795749, 933590, 985213, 944008, 982125],
                backgroundColor: '#2D9CDB',
                stack: 'revenue',
                datalabels: {
                    formatter: (value) => `$${value}`,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                }
            },
            {
                label: 'Member Revenue',
                data: [88417, 233398, 328404, 404575, 472875],
                backgroundColor: '#174E8C',
                stack: 'revenue',
                datalabels: {
                    formatter: (value) => `$${value}`,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                }
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
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
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default RevenueBreakoutChart;
