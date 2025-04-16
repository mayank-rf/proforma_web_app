import { useState } from 'react';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import OperatingExpensePieChart from './OperatingExpensePieChart'; // Adjust the import path as needed

const percentOfSalesYear1 = [3, 6, 1, 1, 31, 1, 1, 1, 2, 1, 1, 9];
const percentOfSalesYear3 = [3, 6, 1, 1, 21, 1, 1, 1, 2, 1, 1, 9];
const percentOfSalesYear5 = [3, 6, 1, 1, 19, 1, 1, 1, 2, 1, 1, 9];

export default function OpexChartTabs() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const tabData = [
        { label: 'Year 1', data: percentOfSalesYear1 },
        { label: 'Year 3', data: percentOfSalesYear3 },
        { label: 'Year 5', data: percentOfSalesYear5 },
    ];

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    {tabData.map((tab, index) => (
                        <Tab key={index} label={tab.label} />
                    ))}
                </Tabs>
            </Box>
            <Box sx={{ mt: 2 }}>
                {tabData.map((tab, index) => (
                    <Box key={index} role="tabpanel" hidden={tabIndex !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
                        {tabIndex === index && <OperatingExpensePieChart percentValues={tab.data} />}
                    </Box>
                ))}
            </Box>
        </>
    );
}
