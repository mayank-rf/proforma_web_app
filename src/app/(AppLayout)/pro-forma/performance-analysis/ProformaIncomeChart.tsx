import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Legend, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Legend, Tooltip, ChartDataLabels);

const data = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
        {
            type: 'bar',
            label: 'Total Revenue',
            data: [884165, 1166988, 1313617, 1348583, 1455050],
            backgroundColor: 'rgba(45, 156, 219, 0.7)',
            order: 2, // Lower order: draw first
            datalabels: {
                align: 'top',
                anchor: 'end',
                formatter: (value) => `$${value}`,
                color: '#3A4F5F',
                font: {
                    weight: 'bold',
                    size: 14,
                },
            },
        },
        {
            type: 'line',
            label: 'OpEx %',
            data: [59, 51, 48, 47, 45],
            borderColor: '#F2C94C',
            borderWidth: 2,
            yAxisID: 'y1',
            order: 1, // Higher order: draw after bars
            datalabels: {
                align: 'top',
                anchor: 'end',
                formatter: (value) => `${value}%`,
                color: '#3A4F5F',
                font: {
                    weight: 'bold',
                    size: 16,
                },
            },
            clip: false,
        },
        {
            type: 'line',
            label: 'Total Expense %',
            data: [98, 80, 74, 73, 69],
            borderColor: '#EB5757',
            borderWidth: 2,
            yAxisID: 'y1',
            order: 1,
            datalabels: {
                align: 'top',
                anchor: 'end',
                formatter: (value) => `${value}%`,
                color: '#3A4F5F',
                font: {
                    weight: 'bold',
                    size: 16,
                },
            },
            clip: false,
        },
        {
            type: 'line',
            label: 'Net Income Margin %',
            data: [2, 20, 26, 27, 31],
            borderColor: '#27AE60',
            borderWidth: 2,
            yAxisID: 'y1',
            order: 1,
            datalabels: {
                align: 'top',
                anchor: 'end',
                formatter: (value) => `${value}%`,
                color: '#3A4F5F',
                font: {
                    weight: 'bold',
                    size: 16,
                },
            },
            clip: false,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            grid: { drawOnChartArea: false },
        },
        y: {
            position: 'left',
            title: { display: true, text: 'Total Revenue ($)' },
            grid: { drawOnChartArea: false },
        },
        y1: {
            position: 'right',
            title: { display: true, text: '% of Sales' },
            grid: { drawOnChartArea: false },
        },
    },
};

export default function IncomeStatementChart() {
    return <Chart type="bar" data={data} options={options} />;
}
