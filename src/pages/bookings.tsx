// pages/bookings/[id].tsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import axios from "@/utils/axios";

interface Booking {
  id: string;
  room: {
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
    amenities: string[];
  };
  bookingDate: string;
  stayDuration: string;
  totalPrice: string;
}

const BookingDetailsPage = () => {
  const router = useRouter();

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/user`
        );
        if (!data.success) throw new Error();

        setBooking(data.booking);
      } catch (err) {
        console.log(err);
        setError("Failed to load booking details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!booking) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Typography variant="h6">Booking not found</Typography>
      </Box>
    );
  }

  const { room, bookingDate, stayDuration, totalPrice } = booking;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Booking Details
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={room.imageUrl}
            alt={room.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, borderRadius: "12px" }}>
            <Typography variant="h5" gutterBottom>
              {room.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {room.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: {room.size}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Beds: {room.beds}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capacity: {room.capacity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Booking Date: {new Date(bookingDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay Duration: {stayDuration}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Total Price: {totalPrice}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingDetailsPage;
