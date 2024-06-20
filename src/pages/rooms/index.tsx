import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Tab, Tabs } from '@mui/material';
import Head from 'next/head';
import RoomCard from '@/components/RoomCard';
import roomsData from '@/data/rooms'; // Import updated roomsData

const RoomsPage = () => {
    const [tabValue, setTabValue] = useState(0); // State for current tab value

    const maleRooms = roomsData.filter(room => room.gender === 'male');
    const femaleRooms = roomsData.filter(room => room.gender === 'female');

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

    const handleBook = (roomTitle: string) => {
        alert(`Booking for ${roomTitle}`);
    };

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
                                        onBook={() => handleBook(room.title)}
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
                                        onBook={() => handleBook(room.title)}
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
