// pages/HomePage.tsx
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter()
  const handleRoomClick = () => {
    router.push("/rooms")
  }
  return (
    <>
      <Head>
        <title>Campus Accommodation Booking</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "70vh" }}>
        <Paper
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Campus Accommodation Booking
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Book your accommodation easily and conveniently right here.
          </Typography>
        </Paper>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper
              onClick={handleRoomClick}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                backgroundColor: '#e0f7fa',
              }}
            >
              <Image src="/images/IMG_3306.jpeg" alt="Single Room" width={200} height={200} style={{ borderRadius: '50%', objectFit: "cover" }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Single Rooms
              </Typography>
              <Typography variant="body1" component="p" align="center">
                Book a single room for your personal space and privacy.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                backgroundColor: '#ffecb3',
              }}
            >
              <Image src="/images/IMG_3305.jpeg" alt="Double Room" width={200} height={200} style={{ borderRadius: '50%', objectFit: "cover" }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Double Rooms
              </Typography>
              <Typography variant="body1" component="p" align="center">
                Share a room with a fellow student for a comfortable stay.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                backgroundColor: '#c8e6c9',
              }}
            >
              <Image src="/images/IMG_3317.jpeg" alt="Apartment" width={200} height={200} style={{ borderRadius: '50%', objectFit: "cover" }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Apartments
              </Typography>
              <Typography variant="body1" component="p" align="center">
                Enjoy the comfort of an apartment with more space and amenities.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
