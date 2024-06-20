// pages/LoginPage.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Paper, Link } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted', formData);
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container maxWidth="sm" sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                            <Box textAlign="center" mt={2}>
                                <Typography variant="body2">
                                    Don't have an account?{' '}
                                    <NextLink href="/register" passHref>
                                        <Link>Register</Link>
                                    </NextLink>
                                </Typography>
                            </Box>
                        </Box>
                    </form>
                </Paper>
            </Container>
        </>
    );
};

export default LoginPage;
