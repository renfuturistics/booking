// components/RoomDetails.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface RoomDetailsProps {
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
    imageUrl,
    title,
    description,
    size,
    beds,
    capacity,
    price,
}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <img src={imageUrl} alt={title} style={{ width: '100%', maxWidth: '600px' }} />
            <Box mt={4} maxWidth="600px" textAlign="left">
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Size: {size}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Beds: {beds}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Capacity: {capacity}
                </Typography>
                <Typography variant="h5">
                    Price: {price}
                </Typography>
            </Box>
        </Box>
    );
};

export default RoomDetails;
