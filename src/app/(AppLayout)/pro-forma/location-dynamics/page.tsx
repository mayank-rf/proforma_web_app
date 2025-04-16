'use client';

import { Box, Card, CardContent, Typography, Grid, Divider, Stack } from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { LineChart } from '@mui/x-charts';
import { SiteFactors } from './SiteFactors';
import SiteQualitySnapshot from './SiteQualitySnapshot';
import CompetitorTable from './CompetitorTable';
import KeyDemographicsTable from './KeyDemographicsTable';
import TrafficChartTabs from './TrafficChartTabs';
import StaticMapWithRadius from './StaticMapWithRadius';

const containerStyle = {
    width: '100%',
    height: '512px',
};

const center = {
    lat: 37.7749,
    lng: 122.4194,
};

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
                        {/* {isLoaded && (
                            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} options={{
                                scrollwheel: false
                            }}>
                                <Marker position={center} />
                            </GoogleMap>
                        )} */}
                        <StaticMapWithRadius lat={38.20443} lng={-84.560326} />
                    </CardContent>
                </Card>

                <Section title="Site Factors">
                    {/* <SiteFactors /> */}
                    <SiteQualitySnapshot />
                </Section>

                {/* Site Overview */}
                {/* <Section title="Site Overview">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Site Name" value="24,500" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Site Address" value="123, Main Street, NY-110011" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Latitude / Longitude" value="37.7749, 122.4194" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Land Size" value="2.5 acres" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Visibility" value="Good" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Area Profile" value="Residential" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Accessibility" value="Easy In/Out With Divided Highway" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Metric label="Type of Site" value="Corner Lot With Light" />
                        </Grid>
                    </Grid>
                </Section> */}

                <Section title="Traffic Profile">
                    <Stack direction={'row'} spacing={1}>
                        <Box>
                            {/* Traffic Profile */}
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
                                    <Metric label="Traffic By Weekend" value="11.2K" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Peak Hours" value="7-10 AM, 3-6 PM" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Metric label="Road Length" value="1,424 miles" />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            {/* <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
                                <CardContent sx={{ margin: 'auto' }}>
                                    <LineChart
                                        xAxis={[{ scaleType: 'point', data: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'] }]}
                                        series={[{ data: [1500, 3200, 2800, 3000, 5000, 2000], label: 'Average Traffic per Hour' }]}
                                        width={750}
                                        height={400}
                                        colors={['#23679D']}
                                    />
                                </CardContent>
                            </Card> */}
                            <TrafficChartTabs />
                        </Box>
                    </Stack>
                </Section>

                {/* Demographic Details */}
                <Section title="Demographic Details">
                    <KeyDemographicsTable />
                </Section>

                {/* Market Overview */}
                <Section title="Competitive Environment">
                    <CompetitorTable />
                    <Typography variant="body1">*M.U.P = Monthly Unlimited Package</Typography>
                </Section>
            </Box>
        </>
    );
}
