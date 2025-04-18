'use client';
import { Box, Stack } from '@mui/system';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Stack>
            <Box sx={{ padding: 2 }}>{children}</Box>
        </Stack>
    );
}
