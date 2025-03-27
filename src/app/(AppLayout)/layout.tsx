'use client'
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system"
import { useRouter } from "next/navigation";


export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Stack>
            <Box sx={{ padding: 2 }}>
                {children}
            </Box>
        </Stack>
    )
}

