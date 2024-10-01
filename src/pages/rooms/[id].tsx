import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, CircularProgress, Typography, Box } from '@mui/material';
import RoomDetails from '@/components/RoomDetails';
import { Room } from '@/data/rooms';
import axios from 'axios';

const RoomDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [room, setRoom] = useState<Room | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
console.log(id)
    useEffect(() => {
        if (!id) return; // Prevent fetch if id is not defined

        const fetchRoomData = async () => {
            setLoading(true);
            setError(null); // Clear any previous errors
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms/${id}`);
                setRoom(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch room information. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchRoomData();
    }, [id]); // Ensure it runs when id is available

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                <Typography color="error" variant="h6">
                    {error}
                </Typography>
            </Box>
        );
    }

    if (!room) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                <Typography variant="h6">Room not found</Typography>
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <RoomDetails
                imageUrl={room.imageUrl}
                title={room.title}
                description={room.description}
                size={room.size}
                beds={room.beds}
                capacity={room.capacity}
                price={room.price}
            />
        </Container>
    );
};

export default RoomDetailsPage;
