'use client';

import { Box, Card, CardContent, Grid, Typography, Divider, Avatar } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import useStore from '../../../../store/useStore';

export default function StaffingAndShifts() {
    const { laborInformation } = useStore();
    // const { manager, assistantManager, attendants } = laborInformation;
    const roles = [
        {
            title: 'Manager',
            hours: laborInformation?.manager?.laborHours + ' Hrs',
            wage: '$' + laborInformation?.manager?.hourlyWages,
            burdenRate: laborInformation?.manager?.burdenRate + '%',
            total: '$79K',
            icon: <PersonIcon fontSize="large" />,
        },
        {
            title: 'Assistant Manager',
            hours: laborInformation?.assistantManager?.laborHours + ' Hrs',
            wage: '$' + laborInformation?.assistantManager?.hourlyWages,
            burdenRate: laborInformation?.assistantManager?.burdenRate + '%',
            total: '$49K',
            icon: <PersonIcon fontSize="large" />,
        },
        {
            title: 'Attendants',
            hours: laborInformation?.attendants?.laborHours + ' Hrs',
            subHours: '80 Hrs. Temp. Labor',
            wage: '$' + laborInformation?.attendants?.hourlyWages,
            burdenRate: laborInformation?.attendants?.burdenRate + '%',
            total: '$144K',
            icon: <GroupIcon fontSize="large" />,
        },
    ];

    return (
        <Card sx={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.0)' }}>
            <CardContent>
                <Grid container spacing={3}>
                    {roles.map((role, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                                <Avatar sx={{ bgcolor: 'transparent', color: 'primary.main' }}>{role.icon}</Avatar>
                                <Typography variant="subtitle1" fontWeight="bold" align="center" fontSize={24} color="primary.main">
                                    {role.title}
                                </Typography>

                                <Box mt={1} textAlign="center">
                                    <Typography variant="body2" color="text.secondary">
                                        Labor Hours / Week
                                    </Typography>
                                    <Typography variant="body1" fontWeight="bolder" color="primary.main" fontSize={20}>
                                        {role.hours}
                                    </Typography>
                                    {/* {role.subHours && (
                                        <Typography variant="caption" sx={{ color: "#1A237E" }}>
                                            {role.subHours}
                                        </Typography>
                                    )} */}
                                </Box>

                                <Box mt={1} textAlign="center">
                                    <Typography variant="body2" color="text.secondary">
                                        Hourly Wages
                                    </Typography>
                                    <Typography variant="body1" fontWeight="bolder" color="primary.main" fontSize={20}>
                                        {role.wage}
                                    </Typography>
                                </Box>

                                <Box mt={1} textAlign="center">
                                    <Typography variant="body2" color="text.secondary">
                                        Burden Rate
                                    </Typography>
                                    <Typography variant="body1" fontWeight="bolder" color="primary.main" fontSize={20}>
                                        {role.burdenRate}
                                    </Typography>
                                </Box>

                                <Divider sx={{ my: 2, width: '100%' }} />

                                <Typography variant="subtitle2" fontWeight="bold" color="primary.main">
                                    {role.title} Labor
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    {role.total}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}
