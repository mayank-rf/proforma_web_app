'use client';

import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Map,
    Factory,
    BarChart,
    MonetizationOn,
    Assessment,
    Summarize,
} from '@mui/icons-material';
import Image from 'next/image';
import SideNav from './SideNav';

const sections = [
    { label: 'Overview', path: '/pro-forma', icon: <Summarize /> },
    { label: 'Location Considerations', path: '/pro-forma/location-dynamics', icon: <Map /> },
    { label: 'Operational Overview', path: '/pro-forma/operational-overview', icon: <Factory /> },
    { label: 'Performance Analysis', path: '/pro-forma/performance-analysis', icon: <BarChart /> },
    { label: 'Car Wash Acquistion Budget', path: '/pro-forma/breakeven-analysis', icon: <MonetizationOn /> },
];

export default function AnalysisLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <Box sx={{ display: 'flex', height: '90vh', overflow: 'hidden', p: 1 }}>
            {/* Sidebar */}
            <Stack>
                <Paper elevation={3} sx={{ width: 260, px: 2, boxShadow: '0 0 8px rgba(35, 103, 157, 1)' }}>
                    <Typography align="center" sx={{ mt: 2 }}>
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={80}
                            height={80}
                            style={{ width: '70%', height: 'auto' }}
                        />
                    </Typography>
                    <Divider sx={{ mt: 0, mb: 1 }} />
                    <List>
                        {sections.map((section) => (
                            <Link key={section.path} href={section.path} passHref legacyBehavior>
                                <ListItemButton
                                    component="a"
                                    selected={pathname === section.path}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 1,
                                        '&.Mui-selected': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                                color: 'white',
                                            },
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                                    color: 'white',
                                                },
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                                color: 'white',
                                            },
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 36 }}>{section.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1" fontWeight={500}>
                                                {section.label}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Paper>
            </Stack>

            {/* <SideNav /> */}

            {/* Animated Content */}
            <Box sx={{ flexGrow: 1, p: 3, position: 'relative', overflowY: 'auto', overflowX: 'hidden', height: '100%', boxShadow: '0 0 8px rgba(35, 103, 157, 0.4)', mx: 2 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    );
}
