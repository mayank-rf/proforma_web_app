'use client';

import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';
import CompetitorTable from './CompetitorTable';
import InteractiveMap from './InteractiveMap';
import KeyDemographicsTable from './KeyDemographicsTable';
import SiteQualitySnapshot from './SiteQualitySnapshot';
import TrafficChartTabs from './TrafficChartTabs';

const Metric = ({ label, value }: { label: string; value: string }) => (
    <Box mb={2}>
        <Typography variant="body2" color="textSecondary">
            {label}
        </Typography>
        <Typography variant="h6" sx={{ color: '#3A4F5F' }}>
            {value}
        </Typography>
    </Box>
);

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

export default function LocationDynamics() {
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    // });

    return (
        <>
            <Typography variant="h4" sx={{ fontSize: 32, fontWeight: 'bolder', color: '#3A4F5F', textAlign: 'left', mb: 4 }}>
                Location Selection Is Critical
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 4, p: 1 }}>
                {/* Google Map */}
                <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                    <CardContent>
                        {/* <StaticMapWithRadius lat={38.20443} lng={-84.560326} /> */}
                        <InteractiveMap lat={38.20443} lng={-84.560326} />
                    </CardContent>
                </Card>

                <Section title="Site Factors">
                    <SiteQualitySnapshot />
                </Section>

                <Section title="Traffic Profile">
                    <Stack direction={{ md: 'column', lg: 'row' }} spacing={2} sx={{ px: 2, py: 1 }}>
                        {/* Summary + Metrics */}
                        <Box flex={1} order={{ xs: 1, md: 1 }}>
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
                                    p: 2,
                                    mb: 2,
                                }}
                            >
                                <Typography>
                                    This site sees strong daily traffic with an average of 20.9K vehicles, split fairly evenly between weekdays
                                    (10.2K) and weekends (11.2K).{' '}
                                    <strong>
                                        Peak flow occurs during standard commute times—7–10 AM and 3–6 PM—making these prime windows for visibility
                                        and customer inflow.
                                    </strong>{' '}
                                    Consistent afternoon surges suggest strong potential for after-work visits. The 2-way road and 1,424-mile stretch
                                    provide sustained exposure throughout the day.
                                </Typography>
                            </Stack>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Average Daily Traffic (AADT)" value="20.9K" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Road Type" value="2-Way" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Traffic By Weekday" value="10.2K" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box mb={2}>
                                        <Typography variant="body2" color="textSecondary">
                                            Peak Hours
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: '#3A4F5F' }}>
                                            7-10 AM <br /> 3-6 PM
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Traffic By Weekend" value="11.2K" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Road Length" value="1,424 miles" />
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Chart Section */}
                        <Box flex={1} order={{ xs: 2, md: 2 }} sx={{ width: '100%' }}>
                            <TrafficChartTabs />
                        </Box>
                    </Stack>
                </Section>

                {/* Competitive Environment */}
                <Section title="Competitive Environment">
                    <CompetitorTable />
                    <Typography variant="body1">*M.U.P = Monthly Unlimited Package</Typography>
                </Section>

                {/* Demographic Details */}
                <Section title="Demographic Details">
                    <KeyDemographicsTable />
                </Section>
            </Box>
        </>
    );
}
