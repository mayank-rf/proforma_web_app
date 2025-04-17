import { Box, Card, Chip, Grid, LinearProgress, Typography, Tooltip } from '@mui/material';
import useStore from '../../../../store/useStore';
import { siteFactorsMap } from '@/utils/siteFactorsMap';

const siteFactors: { label: keyof typeof siteFactorsMap; value: string; score: number }[] = [
    {
        label: 'areaProfile',
        value: 'Residential',
        score: 0.15,
    },
    {
        label: 'nearestCompetition',
        value: 'One in 4 miles',
        score: 0.1,
    },
    {
        label: 'Weekly Hours of Operation',
        value: 'Less than 30 hours',
        score: -0.25,
    },
    {
        label: 'typeOfSite',
        value: 'Inside lot without light',
        score: -0.25,
    },
    {
        label: 'siteAccessibility',
        value: 'Easy in and out',
        score: 0.15,
    },
    {
        label: 'entranceStackUpArea',
        value: '14-10 Vehicles',
        score: 0.075,
    },
    {
        label: 'numberOfFreeVacuumSlots',
        value: '12-20 Vehicles',
        score: 0.1,
    },
    {
        label: 'numberOfPayStations',
        value: '2',
        score: 0.1,
    },
    {
        label: 'visibility',
        value: 'More than 500 feet both directions',
        score: 0.15,
    },
    {
        label: 'trafficSpeed',
        value: 'Less than 30 mph',
        score: 0.15,
    },
];

const getColor = (score) => {
    if (score >= 0.1) return 'success';
    if (score >= 0) return 'warning';
    return 'error';
};

const getProgressValue = (score) => {
    const normalized = ((score + 0.25) / 0.5) * 100 // from -0.25 to +0.25 range
    return normalized
    // return Math.min(Math.max(normalized * 100, 0), 100);
};

export default function SiteQualitySnapshot() {
   const { siteFactors:globalSiteFactor } = useStore();
    const totalScore = siteFactors.reduce((acc, factor) => acc + factor.score, 0);
    return (
        <Box p={0}>
            <Grid container spacing={2}>
                {siteFactors.map((factor, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card elevation={2} sx={{ p: 2 }}>
                            <Typography variant="body1" fontWeight="bold" fontSize={18} color={'#3A4F5F'}>
                             {siteFactorsMap[factor.label]?.label}
                            </Typography>
                            <Chip
                                label={siteFactorsMap[factor.label][globalSiteFactor[factor.label]]}
                                color={getColor(factor.score)}
                                variant="outlined"
                                sx={{ mt: 1, borderRadius: 1, fontSize: 16 }}
                            />
                            <Tooltip title={`Impact Score: ${factor.score}`} arrow>
                                <LinearProgress
                                    variant="determinate"
                                    value={getProgressValue(factor.score)}
                                    sx={{ mt: 2, height: 8, borderRadius: 4 }}
                                    color={getColor(factor.score)}
                                />
                            </Tooltip>
                            {/* <Typography variant="caption" fontSize={14} sx={{ mt: 1, display: 'block' }}>
                                Weighted Score: {factor.score > 0 ? '+' : ''}{factor.score}
                            </Typography> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* <Box textAlign="center" mt={4}>
                <Typography variant="subtitle1">Total Site Suitability Score</Typography>
                <Typography variant="h4" fontWeight="bold" color={totalScore >= 0 ? 'green' : 'red'}>
                    {totalScore.toFixed(2)}
                </Typography>
            </Box> */}
        </Box>
    );
}
