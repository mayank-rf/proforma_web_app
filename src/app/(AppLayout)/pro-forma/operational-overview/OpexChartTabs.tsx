import { useState } from 'react';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import OperatingExpensePieChart from './OperatingExpensePieChart'; // Adjust the import path as needed

export default function OpexChartTabs({ operatingCostsData }) {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const tabData = [
        { label: 'Year 1', data: operatingCostsData.map((item) => ({ category: item.category, data: item.year1 })) },
        { label: 'Year 3', data: operatingCostsData.map((item) => ({ category: item.category, data: item.year3 })) },
        { label: 'Year 5', data: operatingCostsData.map((item) => ({ category: item.category, data: item.year5 })) },
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
                        {tabIndex === index && <OperatingExpensePieChart operatingCostsData={tab.data} />}
                    </Box>
                ))}
            </Box>
        </>
    );
}
