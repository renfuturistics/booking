import React from 'react';
import { Box, Typography, Chip, Grid, Button, Divider } from '@mui/material';
import { CheckCircleOutline, Wifi, Kitchen, Bathtub, DirectionsCar } from '@mui/icons-material';

interface RoomDetailsProps {
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
    amenities?: string[];  // Optional amenities list
    onBook?: () => void;   // Optional book button
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
    imageUrl,
    title,
    description,
    size,
    beds,
    capacity,
    price,
    amenities = ['Wi-Fi', 'Private Bathroom', 'Kitchen', 'Parking'], // Default amenities
    onBook,
}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
            {/* Room Image */}
            <img src={imageUrl} alt={title} style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
            
            <Box mt={4} maxWidth="800px" sx={{ textAlign: 'left' }}>
                {/* Room Title */}
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>

                {/* Room Description */}
                <Typography variant="body1" color="text.secondary" gutterBottom sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Room Specifications */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6} sm={4}>
                        <Typography variant="body2" color="text.primary"><strong>Size:</strong> {size}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Typography variant="body2" color="text.primary"><strong>Beds:</strong> {beds}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Typography variant="body2" color="text.primary"><strong>Capacity:</strong> {capacity}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Typography variant="body2" color="text.primary"><strong>Price:</strong> {price}</Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Amenities Section */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Amenities</Typography>
                <Grid container spacing={1}>
                    {amenities.map((amenity, index) => (
                        <Grid item key={index}>
                            <Chip
                                icon={amenity === 'Wi-Fi' ? <Wifi /> : amenity === 'Kitchen' ? <Kitchen /> : amenity === 'Private Bathroom' ? <Bathtub /> : <DirectionsCar />}
                                label={amenity}
                                color="primary"
                                variant="outlined"
                                sx={{ fontSize: '0.9rem', padding: '8px' }}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Booking CTA */}
                {onBook && (
                    <Box mt={4} textAlign="center">
                        <Button variant="contained" color="primary" size="large" startIcon={<CheckCircleOutline />} onClick={onBook}>
                            Book Now
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default RoomDetails;
