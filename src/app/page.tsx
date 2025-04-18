'use client';

import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Stack justifyContent="center" alignItems="center" height="100vh" width="100%" sx={{ backgroundColor: 'primary.main' }}>
            <Stack
                justifyContent="center"
                alignItems="center"
                gap={isTabletOrSmaller ? 4 : 6}
                sx={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    padding: 8,
                    borderRadius: 8,
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
                    width: isTabletOrSmaller ? '80%' : undefined,
                }}
            >
                <Stack justifyContent="center" alignItems="center" gap={1}>
                    <Typography variant="h1" sx={{ fontSize: isTabletOrSmaller ? 32 : 48 }} align="center" fontWeight="600" color="#3A4F5F">
                        Welcome to <br />
                        Sonny’s Car Wash Pro Forma
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: isTabletOrSmaller ? 20 : 24 }} fontWeight="400" color="#3A4F5F">
                        Generate revenue projections in seconds
                    </Typography>
                </Stack>

                <Button
                    variant="contained"
                    sx={{ mt: isTabletOrSmaller ? 2 : 4, fontSize: isTabletOrSmaller ? 14 : 16, textTransform: 'capitalize', color: 'white' }}
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => router.push('/site-analysis')}
                >
                    Go To Web App
                </Button>
            </Stack>
        </Stack>
    );
}
