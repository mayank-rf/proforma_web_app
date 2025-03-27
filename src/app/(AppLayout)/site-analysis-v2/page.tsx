import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Download, Share } from '@mui/icons-material';

const KPIData = [
    { label: 'Profitability Score', value: '85 / 100' },
    { label: 'Monthly Revenue', value: '$15,000' },
    { label: 'Setup Cost', value: '$120,000' },
    { label: 'Payback Period', value: '12 months' },
];

const ProfitabilityReport = () => {
    return (
        <Box p={4}>
            {/* Header */}
            <Typography variant="h4" gutterBottom>
                Car Wash Site Profitability Report
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Site: ABC Location | Date: March 26, 2025
            </Typography>

            {/* Summary Cards */}
            <Grid container spacing={2} mt={2}>
                {KPIData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary">
                                    {item.label}
                                </Typography>
                                <Typography variant="h6">{item.value}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Section Placeholder: Location Analysis */}
            <Box mt={4}>
                <Typography variant="h6">Location & Site Analysis</Typography>
                <Typography variant="body2" color="textSecondary">
                    High traffic area with 15,000 cars/day. Easy access and strong visibility.
                </Typography>
            </Box>

            {/* Section Placeholder: Market Demand */}
            <Box mt={4}>
                <Typography variant="h6">Market & Demand</Typography>
                <Typography variant="body2" color="textSecondary">
                    Population: 25,000 | Car Ownership: 80% | 2 competitors within 3km.
                </Typography>
            </Box>

            {/* Section Placeholder: Financial Breakdown */}
            <Box mt={4}>
                <Typography variant="h6">Financial Breakdown</Typography>
                <Typography variant="body2" color="textSecondary">
                    Detailed charts and revenue/cost tables will go here.
                </Typography>
            </Box>

            {/* Section Placeholder: Risks & Opportunities */}
            <Box mt={4}>
                <Typography variant="h6">Risks & Opportunities</Typography>
                <Typography variant="body2" color="textSecondary">
                    SWOT summary: strengths include traffic volume; risks include water pricing.
                </Typography>
            </Box>

            {/* Section Placeholder: Sustainability & Legal */}
            <Box mt={4}>
                <Typography variant="h6">Sustainability & Legal Compliance</Typography>
                <Typography variant="body2" color="textSecondary">
                    Wastewater recycling in place. Zoning approved.
                </Typography>
            </Box>

            {/* Recommendations */}
            <Box mt={4}>
                <Typography variant="h6">Final Recommendation</Typography>
                <Typography variant="body1">
                    This site is highly recommended based on profitability and market demand.
                </Typography>
            </Box>

            {/* Export/Share Buttons */}
            <Box mt={4} display="flex" gap={2}>
                <Button variant="contained" startIcon={<Download />}>
                    Download PDF
                </Button>
                <Button variant="outlined" startIcon={<Share />}>
                    Share Report
                </Button>
            </Box>
        </Box>
    );
};

export default ProfitabilityReport;
