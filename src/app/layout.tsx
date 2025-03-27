'use client'

import { Montserrat } from "next/font/google";
import { Box, Stack } from "@mui/system";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import theme from "@/utils/theme";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
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

  return (
    <Stack sx={{ padding: 2, position: "sticky", top: 0, zIndex: 1000, width: '100%', backgroundColor: 'primary.main' }}>
      <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 600, cursor: "pointer", color: 'white' }} textAlign='center' onClick={() => { router.push("/") }}>SiteAnalytics AI</Typography>
    </Stack>
  )
}
