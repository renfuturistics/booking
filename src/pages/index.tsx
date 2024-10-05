import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, TextField } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  // Handle room selection
  const handleRoomClick = (roomType: string) => {
    router.push(`/rooms?type=${roomType}`);
  };

  return (
    <>
      <Head>
        <title>Campus Room Booking</title>
      </Head>
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/images/campus.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Find Your Perfect Campus Room
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Book your accommodation with ease and comfort
          </Typography>
          <Box mt={4}>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => router.push('/rooms')}
              sx={{ px: 4, py: 2, fontSize: '1.2rem' }}
            >
              Explore Rooms
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Room Categories */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Choose Your Room Type
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper
              onClick={() => handleRoomClick('single')}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 2,
                cursor: 'pointer',
                '&:hover': { boxShadow: 4 },
              }}
            >
              <Image src="/images/IMG_3306.jpeg" alt="Single Room" width={300} height={200} style={{ borderRadius: '10px' }} />
              <Typography variant="h5" component="h3" mt={2}>
                Single Rooms
              </Typography>
              <Typography variant="body1" component="p" mt={1}>
                Enjoy privacy and personal space.
              </Typography>
             
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper
              onClick={() => handleRoomClick('double')}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 2,
                cursor: 'pointer',
                '&:hover': { boxShadow: 4 },
              }}
            >
              <Image src="/images/IMG_3305.jpeg" alt="Double Room" width={300} height={200} style={{ borderRadius: '10px' }} />
              <Typography variant="h5" component="h3" mt={2}>
                Double Rooms
              </Typography>
              <Typography variant="body1" component="p" mt={1}>
                Share a room with a fellow student.
              </Typography>
             
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper
              onClick={() => handleRoomClick('apartment')}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 2,
                cursor: 'pointer',
                '&:hover': { boxShadow: 4 },
              }}
            >
              <Image src="/images/IMG_3317.jpeg" alt="Apartment" width={300} height={200} style={{ borderRadius: '10px' }} />
              <Typography variant="h5" component="h3" mt={2}>
                Apartments
              </Typography>
              <Typography variant="body1" component="p" mt={1}>
                Enjoy more space and amenities.
              </Typography>
             
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials or Featured Section */}
      <Box sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            What Students Are Saying
          </Typography>
          <Typography variant="body1" component="p" align="center" color="textSecondary" mb={4}>
            See how students have loved their experience with Campus Room Booking.
          </Typography>
          
          {/* Add testimonial cards or featured rooms here */}
        </Container>
      </Box>

      {/* Search Section */}
      <Container maxWidth="sm" sx={{ my: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Search for a Room
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search`);
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField label="Search by building or location" variant="outlined" fullWidth />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
