import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const CarWashVolumeChart = () => {
    const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

    const retailVolume = [56142, 69984, 76461, 74214, 76994];
    const memberVolume = [6238, 12350, 16219, 20932, 25665];

    const data = {
        labels,
        datasets: [
            {
                label: 'Retail Volume',
                data: retailVolume,
                backgroundColor: '#2D9CDB',
                stack: 'volume',
                barThickness: 100,
                datalabels: {
                    color: '#fff',
                    anchor: 'center',
                    align: 'center',
                    formatter: (value: number) => value.toLocaleString(),
                    font: {
                        size: 18,
                    },
                },
            },
            {
                label: 'Member Volume',
                data: memberVolume,
                backgroundColor: '#174E8C',
                stack: 'volume',
                barThickness: 100,
                datalabels: {
                    color: '#fff',
                    anchor: 'center',
                    align: 'center',
                    formatter: (value: number, context: any) => {
                        const retail = retailVolume[context.dataIndex];
                        const member = value;
                        const total = retail + member;
                        return [member.toLocaleString()];
                    },
                    font: {
                        size: 18,
                    },
                },
            },
            {
                label: '',
                data: memberVolume,
                backgroundColor: 'transparent',
                stack: 'volume',
                datalabels: {
                    color: '#000',
                    anchor: 'center',
                    align: 'center',
                    formatter: (value: number, context: any) => {
                        const retail = retailVolume[context.dataIndex];
                        const member = value;
                        const total = retail + member;
                        return [total.toLocaleString()];
                    },
                    font: {
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
                    label: function (context: any) {
                        return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
                    },
                },
            },
            datalabels: {
                display: true,
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
                    callback: (value: number) => value.toLocaleString(),
                },
                title: {
                    display: true,
                    text: 'Wash Volume',
                },
                grid: { drawOnChartArea: false },
                display: false,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default CarWashVolumeChart;
