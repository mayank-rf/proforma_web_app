'use client';

import { Montserrat } from 'next/font/google';
import { Box, Stack } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import theme from '@/utils/theme';
import 'leaflet/dist/leaflet.css';
import useStore from '../store/useStore';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentPath = usePathname();

    return (
        <html lang="en">
            <body className={`${montserrat.variable}`}>
                <ThemeProvider theme={theme}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                        <CssBaseline />

                        {currentPath !== '/' && <Header />}

                        {children}
                    </Box>
                </ThemeProvider>
            </body>
        </html>
    );
}

function Header() {
    const router = useRouter();
    const pathName = usePathname();
    const { addressHeader } = useStore();
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
