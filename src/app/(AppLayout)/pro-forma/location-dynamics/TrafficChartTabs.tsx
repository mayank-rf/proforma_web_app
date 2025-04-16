'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, Tabs, Tab, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const hours = ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];

// Example Data
const weekdayData = [1500, 3200, 2800, 3000, 5000, 2000];
const weekendData = [800, 1500, 1700, 2200, 3500, 1200];

// Calculate Average Daily Traffic (Mean of weekday and weekend)
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
            label: 'Daily Avg',
            data: dailyData,
            title: 'Average Daily Traffic per Hour',
        },
    ];

    const { data, title } = tabOptions[tabIndex];

    return (
        <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.05)' }}>
                <Tabs value={tabIndex} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    {tabOptions.map((tab, i) => (
                        <Tab key={i} label={tab.label} />
                    ))}
                </Tabs>
                <CardContent>
                    {/* <Typography variant="subtitle1" align="center" gutterBottom>
                        {title}
                    </Typography> */}
                    <LineChart
                        xAxis={[{ scaleType: 'point', data: hours }]}
                        series={[
                            {
                                data,
                                label: title,
                            },
                        ]}
                        width={750}
                        height={400}
                        colors={['#23679D']}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default TrafficChartTabs;
