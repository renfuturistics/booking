import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

interface RoomCardProps {
    id:string;
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
    slug: string; // Dynamic link
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
    id,
    onBook,
}) => {
    return (
        <Card
            sx={{
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
                elevation: 2,
                maxWidth: '100%',
                borderRadius: 2,
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                alt={title}
                sx={{ objectFit: 'cover', borderRadius: '2px 2px 0 0' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Size:</strong> {size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Beds:</strong> {beds}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Capacity:</strong> {capacity} {capacity > 1 ? 'people' : 'person'}
                    </Typography>
                </Box>

                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    <strong>Price:</strong> {price} / night
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Link href={`/rooms/${id}`} passHref>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            sx={{ 
                                textTransform: 'none',
                                boxShadow: 2,
                                '&:hover': { backgroundColor: 'primary.dark' },
                            }}>
                            View Details
                        </Button>
                    </Link>
                    {onBook && (
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={onBook}
                            sx={{
                                textTransform: 'none',
                                borderColor: 'secondary.main',
                                '&:hover': { backgroundColor: 'secondary.light' },
                            }}
                        >
                            Book Now
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default RoomCard;
