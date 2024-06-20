// pages/RegisterPage.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, MenuItem, Link } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        gender: '',
        studentId: '',
        name: '',
        surname: '',
        password: '',
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
                <title>Register</title>
            </Head>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4, height: "70vh" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="First Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Last Name"
                            name="surname"
                            type="text"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Gender"
                            name="gender"
                            select
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>

                        </TextField>
                        <TextField
                            label="Student ID"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Register
                        </Button>
                        <Box textAlign="center" mt={2}>
                            <Typography variant="body2">
                                Already have an account?{' '}
                                <NextLink href="/login" passHref>
                                    <Link>Register</Link>
                                </NextLink>
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Container>
        </>
    );
};

export default RegisterPage;
