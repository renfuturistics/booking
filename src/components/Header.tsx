// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
                    Campus Room Booking
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Button color="inherit" component={Link} href="/">Home</Button>
                    <Button color="inherit" component={Link} href="/rooms">Rooms</Button>
                    <Button color="inherit" component={Link} href="/about">About</Button>
                    <Button color="inherit" component={Link} href="/contact">Contact</Button>
                    <Button color="inherit" component={Link} href="/login">Login</Button>
                </Box>
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
                        <MenuItem onClick={handleClose} component={Link} href="/about">About</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} href="/contact">Contact</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} href="/login">Login</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
