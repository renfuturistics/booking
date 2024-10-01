import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const router = useRouter();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, padding: '0 2rem' }}>
            <Toolbar disableGutters>
                {/* Logo */}
                <Typography 
                    variant="h6" 
                    sx={{ flexGrow: 1, cursor: 'pointer', color: 'white', fontWeight: 'bold' }} 
                    onClick={() => router.push('/')}
                >
                    Campus Room Booking
                </Typography>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    <Button color="inherit" component={Link} href="/" sx={{ textTransform: 'capitalize' }}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} href="/rooms" sx={{ textTransform: 'capitalize' }}>
                        Rooms
                    </Button>
                    <Button color="inherit" component={Link} href="/bookings" sx={{ textTransform: 'capitalize' }}>
                        Bookings
                    </Button>
                    <Button color="inherit" component={Link} href="/about" sx={{ textTransform: 'capitalize' }}>
                        About
                    </Button>
                    <Button 
                        color="secondary" 
                        component={Link} 
                        href="/login" 
                        sx={{ 
                            textTransform: 'capitalize', 
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.dark,
                            }
                        }}
                    >
                        Login
                    </Button>
                </Box>

                {/* Mobile Menu */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component={Link} href="/">Home</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} href="/rooms">Rooms</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} href="/bookings">Bookings</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} href="/about">About</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} href="/login">Login</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
