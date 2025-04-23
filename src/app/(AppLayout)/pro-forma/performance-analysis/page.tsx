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
                                <Typography sx={{ fontWeight: 'bold', color: '#3A4F5F' }}>Growth & Profitability</Typography>
                                Revenue growth slows (32% → 7%), but net income margin climbs (2% → 31%) and ROE hits 52%. Efficiency is driving
                                profits more than scalability.
                                <Typography sx={{ fontWeight: 'bold', color: '#3A4F5F' }}>Recommended Strategies:</Typography>
                                <ul style={{ margin: 0 }}>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Optimize ops further</Typography> — replicate
                                        cost-saving levers.
                                    </li>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Reinvest profits</Typography> into scalable growth
                                        (e.g., tech, memberships).
                                    </li>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Explore new revenue streams</Typography> as
                                        top-line growth plateaus.
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
                                <Typography sx={{ fontWeight: 'bold', color: '#3A4F5F' }}>Memberships Are the Growth Engine</Typography>
                                Retail revenue flattens; member revenue 5x's. Strong sign of stickiness and high LTV.
                                <Typography sx={{ fontWeight: 'bold', color: '#3A4F5F' }}>Recommended Strategies</Typography>
                                <ul style={{ margin: 0 }}>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Push member growth</Typography> — perks, referrals,
                                        loyalty.
                                    </li>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Shift marketing to recurring models</Typography>.
                                    </li>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Test dynamic pricing</Typography> for retail to
                                        nudge conversions.
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
                                <Typography sx={{ fontWeight: 'bold', color: '#3A4F5F' }}>Scale Ops with Member Demand</Typography>
                                Retail volume plateaus, but member washes surge 4x. Total volume exceeds 100K — potential capacity strain ahead.
                                <Typography sx={{ fontWeight: 'bold', color: '#3A4F5F' }}>Recommended Strategies</Typography>
                                <ul style={{ margin: 0 }}>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Plan capacity scale-up</Typography> (equipment,
                                        staff, lanes).
                                    </li>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Align ops with member usage patterns</Typography>.
                                    </li>
                                    <li>
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>Offer scheduling tools</Typography> to smooth peak
                                        demand.
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
