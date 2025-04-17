'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, Tabs, Tab, Typography } from '@mui/material';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const hours = ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];

// Example Data
const weekdayData = [1500, 3200, 2800, 3000, 5000, 2000];
const weekendData = [800, 1500, 1700, 2200, 3500, 1200];
const dailyData = weekdayData.map((value, index) => Math.round((value + weekendData[index]) / 2));

const TrafficChartTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const tabOptions = [
        {
            label: 'Weekday',
            data: weekdayData,
            title: 'Average Weekday Traffic per Hour',
        },
        {
            label: 'Weekend',
            data: weekendData,
            title: 'Average Weekend Traffic per Hour',
        },
        {
            label: 'Daily Average',
            data: dailyData,
            title: 'Average Daily Traffic per Hour',
        },
    ];

    const { data, title } = tabOptions[tabIndex];

    const chartData = {
        labels: hours,
        datasets: [
            {
                label: title,
                data,
                borderColor: '#23679D',
                backgroundColor: 'rgba(35, 103, 157, 0.3)',
                tension: 0.3,
                fill: true,
                pointRadius: 6,
                pointHoverRadius: 7,
                borderWidth: 4,
                pointBorderWidth: 4,
                pointBackgroundColor: 'transparent',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.parsed.y} cars`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: false,
                    text: 'Cars',
                },
                grid: {
                    display: false,
                },
            },
            x: {
                title: {
                    display: false,
                    text: 'Hour',
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.05)' }}>
                <Tabs value={tabIndex} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    {tabOptions.map((tab, i) => (
                        <Tab key={i} label={tab.label} />
                    ))}
                </Tabs>
                <CardContent sx={{ p: 2, mx: 2 }}>
                    <Line data={chartData} options={options} width={750} height={400} />
                </CardContent>
            </Card>
        </Box>
    );
};

export default TrafficChartTabs;
