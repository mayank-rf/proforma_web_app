import { Box, Card, CardContent, Grid, Typography, Divider } from "@mui/material";

const features = [
    {
        value: "90",
        unit: "ft",
        label: "Tunnel Length",
    },
    {
        value: "17",
        unit: "Vehicles",
        label: "Entrance\nStack Up Area",
    },
    {
        value: "60",
        unit: "Vehicles",
        label: "Max Hourly\nThroughput",
    },
    {
        value: "12",
        unit: "hrs",
        label: "Avg. Daily\nWash Hours",
    },
    {
        value: "15",
        unit: "",
        label: "Vacuum Slots",
    },
];

export default function CarWashFeatures() {
    return (
        <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
            <CardContent>
                <Grid container spacing={3} justifyContent="center">
                    {features.map((feature, idx) => (
                        <Grid item xs={4} key={idx}>
                            <Box textAlign="center">
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color="#0D47A1"
                                    sx={{ mb: 0.5 }}
                                    fontSize={48}
                                >
                                    [{feature.value}]
                                    {feature.unit && (
                                        <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="#0D47A1"
                                            fontSize={24}
                                        >
                                            {` ${feature.unit}`}
                                        </Typography>
                                    )}
                                </Typography>
                                <Typography variant="body2" sx={{ whiteSpace: "pre-line" }} fontSize={18}>
                                    {feature.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}
