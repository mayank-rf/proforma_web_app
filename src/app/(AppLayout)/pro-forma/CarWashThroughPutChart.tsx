'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const CarWashThroughPutChart = () => {
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
    const maxVolumes = [30000, 35000, 42000, 47000, 53000];

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Max Car Volume',
                data: maxVolumes,
                backgroundColor: '#4CAF50',
                borderRadius: 6,
                barThickness: 100,
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: (value: number) => `${value.toLocaleString()} cars`,
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
            },
        },
    };

    return <Bar data={data} options={options} plugins={[ChartDataLabels]} height={100} />;
};

export default CarWashThroughPutChart;
