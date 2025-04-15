import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Users', icon: <PeopleIcon />, path: '/users' },
    { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export default function SideNav() {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            initial={{ width: 70 }}
            animate={{ width: isHovered ? 200 : 70 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                height: '100vh',
                backgroundColor: '#1e1e2f',
                color: 'white',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
            }}
        >
            <List disablePadding sx={{ mt: 2 }}>
                {navItems.map((item) => (
                    <ListItemButton
                        key={item.label}
                        sx={{
                            py: 1.5,
                            px: 2,
                            borderRadius: '8px',
                            mx: 1,
                            mb: 1,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#2a2a40',
                            },
                        }}
                    >
                        <Tooltip title={!isHovered ? item.label : ''} placement="right">
                            <ListItemIcon sx={{ color: 'white', minWidth: 0, mr: isHovered ? 2 : 'auto' }}>
                                {item.icon}
                            </ListItemIcon>
                        </Tooltip>
                        {isHovered && <ListItemText primary={item.label} />}
                    </ListItemButton>
                ))}
            </List>
        </motion.div>
    );
}
