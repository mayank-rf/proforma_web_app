'use client';

import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import CarWashFeatures from './CarWashFeatures';
import OperatingExpensePieChart from './OperatingExpensePieChart';
import OpexTable from './OpexTable';
import StaffingAndShifts from './StaffingAndShifts';
import WashPackageSummary from './WashPackageSummary';
import OpexChartTabs from './OpexChartTabs';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
        <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: '#3A4F5F' }}>
                {title}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {children}
        </CardContent>
    </Card>
);

const operatingCosts = [
    { category: 'Labor', year1: 271534, year3: 271534, year5: 271534 },
    { category: 'Utilities - Electric, Water, Phone', year1: 79575, year3: 118226, year5: 130955 },
    { category: 'Chemical Supplies', year1: 50303, year3: 74736, year5: 82782 },
    { category: 'Advertisements and Promotions', year1: 26525, year3: 39409, year5: 43652 },
    { category: 'Real Estate Taxes', year1: 24000, year3: 24000, year5: 24000 },
    { category: 'Miscellaneous', year1: 13262, year3: 19704, year5: 21826 },
    { category: 'Customer Claims', year1: 8842, year3: 13136, year5: 14551 },
    { category: 'Legal and Professional Fees', year1: 8842, year3: 13136, year5: 14551 },
    { category: 'Licenses and Taxes', year1: 8842, year3: 13136, year5: 14551 },
    { category: 'Refuse Collection', year1: 8842, year3: 13136, year5: 14551 },
    { category: 'Property Repairs and Maintenance', year1: 8842, year3: 13136, year5: 14551 },
    { category: 'Insurance', year1: 12000, year3: 12000, year5: 12000 },
];

const percentOfSalesYear1 = [3, 6, 1, 1, 31, 1, 1, 1, 2, 1, 1, 9];
const percentOfSalesYear3 = [3, 6, 1, 1, 21, 1, 1, 1, 2, 1, 1, 9];
const percentOfSalesYear5 = [3, 6, 1, 1, 19, 1, 1, 1, 2, 1, 1, 9];

// Make sure the lengths match
const mergedOperatingData = operatingCosts.map((item, index) => ({
    category: item.category,
    year1: {
        amount: item.year1,
        percentOfSales: percentOfSalesYear1[index] || 0,
    },
    year3: {
        amount: item.year3,
        percentOfSales: percentOfSalesYear3[index] || 0,
    },
    year5: {
        amount: item.year5,
        percentOfSales: percentOfSalesYear5[index] || 0,
    },
}));

export default function OperationalOverview() {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 1 }}>
            {/* Car Wash Features */}
            <Section title="Car Wash Features">
                <CarWashFeatures />
            </Section>

            {/* Staffing & Shifts */}
            <Section title="Staffing & Shifts">
                <StaffingAndShifts />
            </Section>

            {/* Wash Package Summary */}
            <Section title="Wash Package Summary">
                <WashPackageSummary />
            </Section>

            {/* Operating Cost Summary */}
            <Section title="Operating Cost Summary">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <OpexTable operatingCosts={operatingCosts} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Stack justifyContent="center" alignItems="center">
                            <OpexChartTabs operatingCostsData={mergedOperatingData} />
                        </Stack>
                    </Grid>
                </Grid>
            </Section>
        </Box>
    );
}
