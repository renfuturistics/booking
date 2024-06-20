// pages/BookedRoomsPage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, CircularProgress } from '@mui/material';
import Head from 'next/head';
import RoomCard from '@/components/RoomCard'; // Assuming you have a RoomCard component
import { Room } from '@/data/rooms';
import axios from 'axios';
const BookedRoomsPage = () => {
    const [bookedRooms, setBookedRooms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Fetch booked rooms from your backend or service
        const fetchBookedRooms = async () => {
            try {
                const { data } = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}api/bookings/user/666d0a0397db2de6a6f78acb`); // Adjust the endpoint as needed
                if (!data.success) throw new Error(data.error)

                setBookedRooms(data.bookings);
            } catch (error) {
                console.error('Error fetching booked rooms:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookedRooms();
    }, []);

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }
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
                                    imageUrl={room.room.imageUrl}
                                    title={room.room.title}
                                    description={room.room.description}
                                    size={room.room.size}
                                    slug=''
                                    beds={room.room.beds}
                                    capacity={room.room.capacity}
                                    price={room.room.price}
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
