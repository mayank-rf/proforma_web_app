'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Header() {
    const router = useRouter();
    const pathName = usePathname();
    // const { addressHeader } = useStore();
    const [addressHeader, setAddressHeader] = useState('');
    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('proformaData'));
        if (data && data.siteAddress) {
            setAddressHeader(
                `${data.siteAddress?.address || ''}-${data.siteAddress?.city || ''}, ${data.siteAddress?.state || ''}, ${data.siteAddress?.zip_code || ''}`
            );
        }
    }, []);
    const [addressLine1, addressLine2] = addressHeader?.split('-') || [];

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 2, position: 'sticky', top: 0, zIndex: 1000, width: '100%', backgroundColor: 'primary.main' }}
        >
            {/* Back button */}
            {pathName !== '/site-analysis' && (
                <Button
                    variant="contained"
                    startIcon={<ArrowBackIcon />}
                    sx={{ mr: 2 }}
                    onClick={() => {
                        router.push('/site-analysis');
                    }}
                >
                    Back
                </Button>
            )}

            {/* Centered title */}
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                <Typography
                    variant="h1"
                    sx={{ fontSize: 24, fontWeight: 600, cursor: 'pointer', color: 'white', whiteSpace: 'nowrap' }}
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    Sonny’s Car Wash Pro Forma
                </Typography>
            </Box>

            {/* Address */}
            {pathName.includes('/pro-forma') && addressLine1 && addressLine2 && (
                <Box textAlign="right">
                    <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500, color: 'white' }}>
                        {addressLine1} <br />
                        {addressLine2}
                    </Typography>
                </Box>
            )}
        </Stack>
    );
}
