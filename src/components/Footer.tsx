import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                backgroundColor: theme => theme.palette.grey[900],
                color: 'white',
            }}
            component="footer"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* About Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Campus Room Booking
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            Easily book rooms for your study sessions, meetings, and events on campus.
                        </Typography>
                    </Grid>
                    
                    {/* Quick Links */}
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="/" color="inherit" display="block" underline="hover">
                            Home
                        </Link>
                        <Link href="/about" color="inherit" display="block" underline="hover">
                            About
                        </Link>
                        <Link href="/contact" color="inherit" display="block" underline="hover">
                            Contact
                        </Link>
                        <Link href="/login" color="inherit" display="block" underline="hover">
                            Login
                        </Link>
                    </Grid>
                    
                    {/* Resources */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Resources
                        </Typography>
                        <Link href="/help" color="inherit" display="block" underline="hover">
                            Help Center
                        </Link>
                        <Link href="/terms" color="inherit" display="block" underline="hover">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" color="inherit" display="block" underline="hover">
                            Privacy Policy
                        </Link>
                    </Grid>
                    
                    {/* Contact Section */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            123 Campus Way
                            <br />
                            University City, State, 12345
                            <br />
                            Email: <Link href="mailto:info@campusbooking.edu" color="inherit" underline="hover">info@campusbooking.edu</Link>
                        </Typography>
                        <Box mt={2}>
                            <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={3} textAlign="center">
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Campus Room Booking. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
