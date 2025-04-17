'use client';

import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import CarWashVolumeChart from './CarWashVolumeChart';
import CarWashVolumeTable from './CarWashVolumeTable';
import IncomeStatementChart from './ProformaIncomeChart';
import ProFormaIncomeTable from './ProformaIncomeTable';
import RevenueBreakoutChart from './RevenueBreakoutChart';
import RevenueBreakoutTable from './RevenueBreakoutTable';

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

export default function KPIAnalysis() {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 1 }}>
            {/* Pro Forma Income Statement */}
            <Section title="Pro Forma Income Statement">
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={3}>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                            <Typography sx={{ textAlign: 'left', p: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <IncomeStatementChart />
                    </Grid>
                    <Grid item xs={12}>
                        <ProFormaIncomeTable />
                    </Grid>
                </Grid>
            </Section>

            {/* Revenue Breakout */}
            <Section title="Revenue Breakout">
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={3}>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                            <Typography sx={{ textAlign: 'left', p: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <RevenueBreakoutChart />
                    </Grid>
                    <Grid item xs={12}>
                        <RevenueBreakoutTable />
                    </Grid>
                </Grid>
            </Section>

            {/* Car Wash Volume Estimates */}
            <Section title="Car Wash Volume Estimates">
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={3}>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                            <Typography sx={{ textAlign: 'left', p: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <CarWashVolumeChart />
                    </Grid>
                    <Grid item xs={12}>
                        <CarWashVolumeTable />
                    </Grid>
                </Grid>
            </Section>
        </Box>
    );
}
