'use client';

import { Stack, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const pathName = usePathname();
    // const { addressHeader } = useStore();
    let addressHeader = JSON.parse(window.localStorage.getItem('proformaData'))?.siteAddress;
    addressHeader = `${addressHeader?.address || ''}-${addressHeader?.city || ''}, ${addressHeader?.state || ''}, ${addressHeader?.zip_code || ''}`;
    const [addressLine1, addressLine2] = addressHeader?.split('-') || [];

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 2, position: 'sticky', top: 0, zIndex: 1000, width: '100%', backgroundColor: 'primary.main' }}
        >
            <Typography
                variant="h1"
                sx={{ fontSize: 24, fontWeight: 600, cursor: 'pointer', color: 'white' }}
                onClick={() => {
                    router.push('/');
                }}
            >
                Sonny’s Car Wash Pro Forma
            </Typography>
            {pathName.includes('/pro-forma') && (
                <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500, color: 'white' }} textAlign="right">
                    {addressLine1 && addressLine2 && (
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: 'white',
                                textAlign: 'right',
                            }}
                        >
                            {addressLine1} <br />
                            {addressLine2}
                        </Typography>
                    )}
                </Typography>
            )}
        </Stack>
    );
}
