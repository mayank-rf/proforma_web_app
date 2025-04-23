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
                                <strong>Profitability &gt; Growth</strong>
                                <br />
                                Revenue growth slows (32% → 7%), but net income margin climbs (2% → 31%) and ROE hits 52%. Efficiency is driving
                                profits more than scalability. <br />
                                <strong>Actions</strong>
                                <ul>
                                    <li>
                                        <b>Optimize ops further</b> — replicate cost-saving levers.
                                    </li>
                                    <li>
                                        <b>Reinvest profits</b> into scalable growth (e.g., tech, memberships).
                                    </li>
                                    <li>
                                        <b>Explore new revenue streams</b> as top-line growth plateaus.
                                    </li>
                                </ul>
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
                                <strong>Memberships Are the Growth Engine</strong>
                                <br />
                                Retail revenue flattens; member revenue 5x's. Strong sign of stickiness and high LTV.
                                <br />
                                <strong>Actions</strong>
                                <ul>
                                    <li>
                                        <b>Push member growth</b> — perks, referrals, loyalty.
                                    </li>
                                    <li>
                                        <b>Shift marketing to recurring models</b>.
                                    </li>
                                    <li>
                                        <b>Test dynamic pricing</b> for retail to nudge conversions.
                                    </li>
                                </ul>
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
                                <strong>Scale Ops with Member Demand</strong>
                                <br />
                                Retail volume plateaus, but member washes surge 4x. Total volume exceeds 100K — potential capacity strain ahead.
                                <br />
                                <strong>Actions</strong>
                                <ul>
                                    <li>
                                        <b>Plan capacity scale-up</b> (equipment, staff, lanes).
                                    </li>
                                    <li>
                                        <b>Align ops with member usage patterns</b>.
                                    </li>
                                    <li>
                                        <b>Offer scheduling tools</b> to smooth peak demand.
                                    </li>
                                </ul>
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
