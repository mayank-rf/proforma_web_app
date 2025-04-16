import { Box, Typography, LinearProgress, Stack } from '@mui/material';

const ratings = [
    {
        label: 'Area Profile',
        value: 4,
        description:
            'Rates the priority of proximity to shopping centers, businesses, residential areas, and industrial parks / facilities, respectively.',
    },
    {
        label: 'Nearest Competition',
        value: 2,
        description:
            'Rates proximity to competitive threats through 4 mile-, multiple in 4 mile-, 1 in 2 mile-, and multiple in 2 mile-radius, respectively.',
    },
    {
        label: 'Hours of Operation',
        value: 3,
        description: 'Rates the duration of operating hours—70+ hours, 70-65 hours, 64-60 hours, and less than 60 hours, respectively.',
    },
    {
        label: 'Site Type',
        value: 4,
        description:
            'Rates the priority of site type: corner lot with light, corner lot without light, inside lot near light, and inside lot no light, respectively.',
    },
    {
        label: 'Accessibility',
        value: 3,
        description: 'Rates the ease of access: easy in/out, easy in/out with divided highway, easy in/out one-way, difficult in/out, respectively.',
    },
    {
        label: 'Stack Up Area',
        value: 1,
        description:
            'Rates the entrance capacity to hold car lines: 20+ vehicles, 20-15 vehicles, 14-10 vehicles, less than 10 vehicles, respectively.',
    },
    {
        label: 'Number of Free Vacuum Slots',
        value: 3,
        description: 'Rates the vacuum slot offering: 20+ vehicles, 20-12 vehicles, less than 12 vehicles, and “coin or none”, respectively.',
    },
    {
        label: 'Number of Pay Stations',
        value: 2,
        description: 'Rates the ability to drive throughput: 3 or more, 2, 1, or live person, respectively.',
    },
    {
        label: 'Visibility',
        value: 4,
        description:
            'Rates the consumer awareness of the site location: 500+ feet, 500-400 feet, 400-300 feet, and <300 feet from both directions, respectively.',
    },
    {
        label: 'Traffic Speed',
        value: 1,
        description: 'Rates the desirable level of traffic speed: <30mph, 40-30mph, 50-40mph, 50+mph, respectively.',
    },
];

export const SiteFactors = () => (
    <Box sx={{ width: '98%', mx: 'auto' }}>
        <Stack spacing={3}>
            {ratings.map((item) => (
                <Box key={item.label}>
                    <Stack direction={'column'} alignItems={'flex-start'}>
                        <Typography variant="body2" fontSize={20} fontWeight={600} color="#3A4F5F">
                            {item.label}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" fontWeight={500} fontSize={16}>
                            {item.description}
                        </Typography>
                    </Stack>
                    <Box sx={{}}>
                        <LinearProgress variant="determinate" value={(item.value / 4) * 100} sx={{ height: 10, borderRadius: 5 }} />
                        {/* <Typography variant="body2" color="textSecondary" fontSize={16}>
                            {(item.value / 4) * 100}%
                        </Typography> */}
                    </Box>
                </Box>
            ))}
        </Stack>
    </Box>
);
