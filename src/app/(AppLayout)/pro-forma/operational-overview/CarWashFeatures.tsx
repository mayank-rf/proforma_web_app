import { Box, Card, CardContent, Grid, Typography, Divider, Stack } from '@mui/material';

const features = [
    {
        value: '90',
        unit: 'ft',
        label: 'Tunnel Length',
    },
    {
        value: '17',
        unit: 'Vehicles',
        label: 'Entrance\nStack Up Area',
    },
    {
        value: '60',
        unit: 'Vehicles',
        label: 'Max Hourly\nThroughput',
    },
    {
        value: '12',
        unit: 'hrs',
        label: 'Avg. Daily\nWash Hours',
    },
    {
        value: '15',
        unit: '',
        label: 'Vacuum Slots',
    },
];

export default function CarWashFeatures() {
    return (
        <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
            <CardContent>
                <Stack direction="row" spacing={2} justifyContent="space-around">
                    {features.map((feature) => (
                        <Box textAlign="center">
                            <Typography variant="h5" fontWeight="bold" color="primary.main" sx={{ mb: 0.5 }} fontSize={48}>
                                {feature.value}
                                {feature.unit && (
                                    <Typography component="span" variant="subtitle1" color="primary.main" fontSize={26} fontWeight={600}>
                                        {` ${feature.unit}`}
                                    </Typography>
                                )}
                            </Typography>
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }} fontSize={18} fontWeight={600}>
                                {feature.label}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}

/*

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const features = [
    {
        value: '90',
        unit: 'ft',
        label: 'Tunnel Length',
    },
    {
        value: '17',
        unit: 'Vehicles',
        label: 'Entrance\nStack Up Area',
    },
    {
        value: '60',
        unit: 'Vehicles',
        label: 'Max Hourly\nThroughput',
    },
    {
        value: '12',
        unit: 'hrs',
        label: 'Avg. Daily\nWash Hours',
    },
    {
        value: '15',
        unit: '',
        label: 'Vacuum Slots',
    },
];

export default function CarWashFeatures() {
    return (
        <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                    {features.map((feature, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                flexBasis: '20%',
                                maxWidth: '20%',
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" color="primary.main" sx={{ mb: 0.5 }} fontSize={48}>
                                {feature.value}
                                {feature.unit && (
                                    <Typography component="span" variant="subtitle1" color="primary.main" fontSize={26} fontWeight={600}>
                                        {` ${feature.unit}`}
                                    </Typography>
                                )}
                            </Typography>
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }} fontSize={18} fontWeight={600}>
                                {feature.label}
                            </Typography>
                        </Box>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}


*/
