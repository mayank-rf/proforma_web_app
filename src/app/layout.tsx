'use client';

import { Montserrat } from 'next/font/google';
import { Box, Stack } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import theme from '@/utils/theme';
import 'leaflet/dist/leaflet.css';
import useStore from '../store/useStore';
import Header from '@/components/Header';

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
