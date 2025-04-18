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

const percentOfSalesYear1 = [3, 6, 1, 1, 31, 1, 1, 1, 2, 1, 1, 9];
const percentOfSalesYear3 = [3, 6, 1, 1, 21, 1, 1, 1, 2, 1, 1, 9];
const percentOfSalesYear5 = [3, 6, 1, 1, 19, 1, 1, 1, 2, 1, 1, 9];

export default function OperationalOverview() {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 1 }}>
            {/* Operating Cost Summary */}
            <Section title="Operating Cost Summary">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <OpexTable />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Stack justifyContent="center" alignItems="center">
                            <OpexChartTabs />
                        </Stack>
                    </Grid>
                </Grid>
            </Section>

            {/* Staffing & Shifts */}
            <Section title="Staffing & Shifts">
                <StaffingAndShifts />
            </Section>

            {/* Wash Package Summary */}
            <Section title="Wash Package Summary">
                <WashPackageSummary />
            </Section>

            {/* Car Wash Features */}
            <Section title="Car Wash Features">
                <CarWashFeatures />
            </Section>
        </Box>
    );
}
