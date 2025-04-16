'use client';

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CarWashVolumeChart from './CarWashVolumeChart';
import CarWashVolumeTable from './CarWashVolumeTable';
import IncomeStatementChart from './ProformaIncomeChart';
import ProFormaIncomeTable from './ProformaIncomeTable';
import RevenueBreakoutChart from './RevenueBreakoutChart';
import RevenueBreakoutTable from './RevenueBreakoutTable';

export default function KPIAnalysis() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 1 }}>
            {/* Pro Forma Income Statement */}
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Pro Forma Income Statement
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={5}>
                            <ProFormaIncomeTable />
                        </Grid>
                        <Grid item xs={7}>
                            <IncomeStatementChart />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Revenue Breakout */}
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Revenue Breakout
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={5}>
                            <RevenueBreakoutTable />
                        </Grid>
                        <Grid item xs={7}>
                            <RevenueBreakoutChart />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Car Wash Volume Estimates */}
            <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Car Wash Volume Estimates
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={5}>
                            <CarWashVolumeTable />
                        </Grid>
                        <Grid item xs={7}>
                            <CarWashVolumeChart />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}
