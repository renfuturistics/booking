// components/RoomCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

interface RoomCardProps {
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
    slug: string; // New prop for dynamic link
    onBook?: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
    imageUrl,
    title,
    description,
    size,
    beds,
    capacity,
    price,
    slug,
    onBook,
}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Size: {size}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Beds: {beds}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Capacity: {capacity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {price}
                </Typography>
                <Box mt={2}>
                    <Link href={`/rooms/${slug}`} passHref>
                        <Button disabled variant="contained" color="primary">
                            View Details
                        </Button>
                    </Link>
                    {onBook && (
                        <Button variant="outlined" color="secondary" onClick={onBook} style={{ marginLeft: '8px' }}>
                            Book Now
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default RoomCard;
