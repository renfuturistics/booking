// pages/BookedRoomsPage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, CircularProgress } from '@mui/material';
import Head from 'next/head';
import RoomCard from '@/components/RoomCard'; // Assuming you have a RoomCard component
import { Room } from '@/data/rooms';
const BookedRoomsPage = () => {
    const [bookedRooms, setBookedRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch booked rooms from your backend or service
        const fetchBookedRooms = async () => {
            try {
                const response = await fetch('/api/bookedRooms'); // Adjust the endpoint as needed
                const data = await response.json();
                setBookedRooms(data);
            } catch (error) {
                console.error('Error fetching booked rooms:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookedRooms();
    }, []);

    return (
        <>
            <Head>
                <title>My Booked Rooms</title>
            </Head>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    My Booked Rooms
                </Typography>
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        {bookedRooms.map((room, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <RoomCard
                                    imageUrl={room.imageUrl}
                                    title={room.title}
                                    description={room.description}
                                    size={room.size}
                                    slug=''
                                    beds={room.beds}
                                    capacity={room.capacity}
                                    price={room.price}
                                    onBook={undefined} // No booking function needed
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default BookedRoomsPage;
