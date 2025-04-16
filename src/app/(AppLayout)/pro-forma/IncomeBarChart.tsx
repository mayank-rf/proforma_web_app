// components/IncomeBarChart.tsx
'use client'; // Needed if using Next.js App Router with client components

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const IncomeBarChart = () => {
    const initialIncome = 16338;
    const cagr = 0.103;
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

    // const incomeData = years.map((_, index) => parseFloat((initialIncome * Math.pow(1 + cagr, index)).toFixed(0)));

    const incomeData = [initialIncome, 230748, 341908, 368416, 449130];

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Net Income ($)',
                data: incomeData,
                backgroundColor: '#23679D',
                borderRadius: 6,
                barThickness: 100,
                datalabels: {
                    align: 'top',
                    anchor: 'end',
                    formatter: (value: number) => `$${value.toLocaleString('en-US')}`,
                    color: '#3A4F5F',
                    font: {
                        weight: 'bold',
                        size: 18,
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
                ticks: {
                    callback: (value: any) => `$${value.toLocaleString()}`,
                },
                title: {
                    display: false,
                    text: 'Income ($)',
                },
                grid: {
                    display: false,
                },
            },
            x: {
                title: {
                    display: false,
                    text: 'Year',
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return <Bar data={data} options={options} height={100} />;
};

export default IncomeBarChart;
