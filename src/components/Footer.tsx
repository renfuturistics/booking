// components/Footer.tsx
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: theme => theme.palette.background.paper,
            }}
            component="footer"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Campus Room Booking
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Easily book rooms for your study sessions, meetings, and events on campus.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="/" color="textSecondary" display="block">
                            Home
                        </Link>
                        <Link href="/about" color="textSecondary" display="block">
                            About
                        </Link>
                        <Link href="/contact" color="textSecondary" display="block">
                            Contact
                        </Link>
                        <Link href="/login" color="textSecondary" display="block">
                            Login
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            123 Campus Way
                            <br />
                            University City, State, 12345
                            <br />
                            Email: info@campusbooking.edu
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={3} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        &copy; {new Date().getFullYear()} Campus Room Booking. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
