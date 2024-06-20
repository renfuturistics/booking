import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Tab, Tabs } from '@mui/material';
import Head from 'next/head';
import { useEffect } from "react"
import RoomCard from '@/components/RoomCard';

import { Room } from '@/data/rooms';
import axios from "axios"
const RoomsPage = () => {
    const [tabValue, setTabValue] = useState(0); // State for current tab value
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [rooms, setRooms] = useState<Room[]>([])

    useEffect(() => {
        const fetchProductData = async () => {
            try {

                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/rooms`)
                if (!data.success) {
                    throw new Error(data.error)
                }
                setRooms(data.rooms)
            } catch (err) {
                console.log(err)
                setError('Failed to fetch product information');
            } finally {
                setLoading(false);
            }
        };


        fetchProductData();

    }, []);


    const maleRooms = rooms.filter(room => room.gender === 'Male');
    const femaleRooms = rooms.filter(room => room.gender === 'Female');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `room-tab-${index}`,
            'aria-controls': `room-tabpanel-${index}`,
        };
    };

    const TabPanel = (props: { children: React.ReactNode; value: number; index: number }) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`room-tabpanel-${index}`}
                aria-labelledby={`room-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    };

    const handleBook = async (roomId: string) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/bookings`, {
                user: '666d0a0397db2de6a6f78acb', // Example user ObjectId as string
                room: roomId,
                startTime: new Date(),
                endTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Example: 1 day later
                status: 'confirmed'
            });
            if (response.data.success) {
                alert(`Room ${roomId} booked successfully!`);
            } else {
                alert('Failed to book the room.');
            }
        } catch (error) {
            console.log(error)
            console.error('Error booking the room:', error);
            alert('An error occurred while booking the room.');
        }
    };
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
                <title>Available Rooms</title>
            </Head>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "70vh" }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Available Rooms
                </Typography>
                <Box sx={{ mb: 4 }}>
                    <Tabs value={tabValue} onChange={handleTabChange} centered>
                        <Tab label="Male Rooms" {...a11yProps(0)} />
                        <Tab label="Female Rooms" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={tabValue} index={0}>
                        <Grid container spacing={4}>
                            {maleRooms.map((room, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <RoomCard
                                        imageUrl={room.imageUrl}
                                        title={room.title}
                                        description={room.description}
                                        size={room.size}
                                        beds={room.beds}
                                        slug={room.slug}
                                        capacity={room.capacity}
                                        price={room.price}
                                        onBook={() => handleBook(room._id)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <Grid container spacing={4}>
                            {femaleRooms.map((room, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <RoomCard
                                        imageUrl={room.imageUrl}
                                        title={room.title}
                                        description={room.description}
                                        size={room.size}
                                        slug={room.slug}
                                        beds={room.beds}
                                        capacity={room.capacity}
                                        price={room.price}
                                        onBook={() => handleBook(room._id)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                </Box>
            </Container>
        </>
    );
};

export default RoomsPage;
