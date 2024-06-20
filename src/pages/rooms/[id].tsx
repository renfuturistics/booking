// pages/rooms/[slug].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import RoomDetails from '@/components/RoomDetails';
import roomsData from '@/data/rooms'; // Import your rooms data or fetch it from API

const RoomDetailsPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Example: Fetch room details from data based on slug
    const room = roomsData.find(room => room.slug === slug);

    if (!room) {
        return <div>Room not found</div>;
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
