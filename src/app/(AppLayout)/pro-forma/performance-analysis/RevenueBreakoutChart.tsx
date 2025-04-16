import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const retailRevenue = [795749, 933590, 985213, 944008, 982125];
const memberRevenue = [88417, 233398, 328404, 404575, 472875];

const RevenueBreakoutChart = () => {
    const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Retail Revenue',
                data: retailRevenue,
                backgroundColor: '#2D9CDB',
                barThickness: 100,
                stack: 'revenue',
                datalabels: {
                    formatter: (value) => `$${value.toLocaleString('en-US')}`,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16,
                    },
                },
            },
            {
                label: 'Member Revenue',
                data: memberRevenue,
                backgroundColor: '#174E8C',
                barThickness: 100,
                stack: 'revenue',
                datalabels: {
                    formatter: (value: number) => `$${value.toLocaleString('en-US')}`,
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16,
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
                        size: 16,
                    },
                },
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
                display: false,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default RevenueBreakoutChart;
