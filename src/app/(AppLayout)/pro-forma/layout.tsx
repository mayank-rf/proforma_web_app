'use client';

import { BarChart, Factory, Map, MonetizationOn, Summarize, Menu as MenuIcon } from '@mui/icons-material';
import { Box, Divider, Fab, List, ListItemButton, ListItemIcon, ListItemText, Paper, Popover, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useRef, useState } from 'react';

const sections = [
    { label: 'Overview', path: '/pro-forma', icon: <Summarize /> },
    { label: 'Location Considerations', path: '/pro-forma/location-dynamics', icon: <Map /> },
    { label: 'Operational Overview', path: '/pro-forma/operational-overview', icon: <Factory /> },
    { label: 'Performance Analysis', path: '/pro-forma/performance-analysis', icon: <BarChart /> },
    { label: 'Car Wash Acquistion Budget', path: '/pro-forma/breakeven-analysis', icon: <MonetizationOn /> },
];

export default function AnalysisLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const fabAnchorRef = useRef<HTMLDivElement | null>(null); // <== Ref for FAB anchor
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex', position: 'relative' }}>
            {/* Backdrop Blur Overlay */}
            {open && (
                <Box
                    onClick={handleClose}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 1300,
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(2px)',
                        transition: 'all 0.3s ease-in-out',
                    }}
                />
            )}

            {/* FAB Anchor Box (bottom-left fixed) */}
            <Box
                ref={fabAnchorRef}
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    left: 24,
                    zIndex: 1400,
                }}
            >
                <Fab color="primary" aria-label="menu" onClick={handleToggle}>
                    <MenuIcon />
                </Fab>
            </Box>

            {/* Popover - anchored to the FAB box */}
            <Popover
                open={open}
                anchorEl={fabAnchorRef.current}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                PaperProps={{
                    sx: {
                        mb: 2,
                        borderRadius: 3,
                        width: 260,
                        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                        zIndex: 1500,
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Box sx={{ textAlign: 'center', mb: 1 }}>
                        <Image src="/logo.svg" alt="Logo" width={80} height={80} style={{ width: '70%', height: 'auto' }} />
                    </Box>
                    <Divider sx={{ mb: 1 }} />
                    <List>
                        {sections.map((section) => (
                            <Link key={section.path} href={section.path} passHref legacyBehavior>
                                <ListItemButton
                                    component="a"
                                    selected={pathname === section.path}
                                    onClick={handleClose}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 1,
                                        '&.Mui-selected': {
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
                </Box>
            </Popover>

            {/* Main content */}
            <Box
                sx={{
                    flexGrow: 1,
                    p: 3,
                    overflowY: 'auto',
                    height: '100%',
                    boxShadow: '0 0 8px rgba(35, 103, 157, 0.4)',
                }}
            >
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
