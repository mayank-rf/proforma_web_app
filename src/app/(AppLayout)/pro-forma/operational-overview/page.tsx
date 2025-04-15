'use client';

import { Box, Card, CardContent, Typography, Grid, Chip, Divider } from '@mui/material';
import OpexTable from './OpexTable';
import OpexCompositionChart from './OpexCompositionChart';
import StaffingAndShifts from './StaffingAndShifts';
import WashPackageSummary from './WashPackageSummary';
import CarWashFeatures from './CarWashFeatures';

const Metric = ({ label, value }: { label: string; value: string }) => (
    <Box mb={2}>
        <Typography variant="body2" color="textSecondary">{label}</Typography>
        <Typography variant="h6" sx={{ color: '#3A4F5F' }}>{value}</Typography>
    </Box>
);

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
                        <OpexCompositionChart />
                    </Grid>
                </Grid>
            </Section>


            {/* Staffing & Shifts */}
            <Section title="Staffing & Shifts">
                {/* <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Metric label="Number of Employees" value="6" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Staff Roles" value="Manager (1), Operators (3), Cashier (1), Maintenance (1)" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Number of Shifts" value="2" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Shift Duration" value="8 hours" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Burden Rate" value="30%" />
                    </Grid>
                </Grid> */}
                <StaffingAndShifts />
            </Section>

            {/* Wash Package Summary */}
            <Section title="Wash Package Summary">
                {/* <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Metric label="Basic Package" value="$10" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Menu Package #1" value="$15" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Menu Package #2" value="$20" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Menu Package #3" value="$25" />
                    </Grid>
                    <Grid item xs={4}>
                        <Metric label="Menu Package #4" value="$30" />
                    </Grid>
                </Grid> */}

                <WashPackageSummary />
            </Section>

            {/* Car Wash Features */}
            <Section title="Car Wash Features">
                <CarWashFeatures />
            </Section>
        </Box>
    );
}
