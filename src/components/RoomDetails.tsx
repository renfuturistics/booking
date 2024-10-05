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
    onBook?: () => void;   // Optional book button handler
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
    imageUrl,
    title,
    description,
    size,
    beds,
    capacity,
    price,
    amenities = ['Wi-Fi', 'Bathroom', 'Kitchen'], // Default amenities
    onBook,
}) => {
    // Function to get corresponding icons for each amenity
    const getAmenityIcon = (amenity: string) => {
        switch (amenity) {
            case 'Wi-Fi':
                return <Wifi />;
            case 'Kitchen':
                return <Kitchen />;
            case 'Private Bathroom':
                return <Bathtub />;
       
            default:
                return <CheckCircleOutline />;
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
            {/* Room Image */}
            <img 
                src={imageUrl} 
                alt={title} 
                style={{
                    width: '100%', 
                    maxWidth: '800px', 
                    borderRadius: '12px', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }} 
            />
            
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
                <Grid container spacing={2} sx={{ mb: 4 }}>
  <Grid item xs={12} sm={6} md={3}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>Size:</Typography>
      <Typography variant="body2" color="text.secondary">{size}</Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>Beds:</Typography>
      <Typography variant="body2" color="text.secondary">{beds}</Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>Capacity:</Typography>
      <Typography variant="body2" color="text.secondary">{capacity}</Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>Price:</Typography>
      <Typography variant="body2" color="text.secondary">{price}</Typography>
    </Box>
  </Grid>
</Grid>


                <Divider sx={{ my: 2 }} />

                {/* Amenities Section */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Amenities</Typography>
                <Grid container spacing={1}>
                    {amenities.map((amenity, index) => (
                        <Grid item key={index}>
                            <Chip
                                icon={getAmenityIcon(amenity)}
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
          
                    <Box mt={4} textAlign="center">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large" 
                            startIcon={<CheckCircleOutline />} 
                       
                            sx={{
                                backgroundColor: '#007BFF', // Customize button color
                                '&:hover': {
                                    backgroundColor: '#0056b3', // Darker on hover
                                },
                                padding: '10px 20px',
                                fontSize: '1rem',
                            }}
                        >
                            Book Room
                        </Button>
                    </Box>
                
            </Box>
        </Box>
    );
};

export default RoomDetails;
