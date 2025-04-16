'use client';

import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import CarWashFeatures from './CarWashFeatures';
import OperatingExpensePieChart from './OperatingExpensePieChart';
import OpexTable from './OpexTable';
import StaffingAndShifts from './StaffingAndShifts';
import WashPackageSummary from './WashPackageSummary';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
        <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: '#3A4F5F' }}>{title}</Typography>
            <Divider sx={{ mb: 2 }} />
            {children}
        </CardContent>
    </Card>
);

export default function OperationalOverview() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 1 }}>
            {/* Operating Cost Summary */}
            <Section title="Operating Cost Summary">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <OpexTable />
                    </Grid>
                    <Grid item xs={6}>
                        <OperatingExpensePieChart />
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
