import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  CircularProgress,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";
import RoomDetails from "@/components/RoomDetails";
import { Room } from "@/data/rooms";
import axios from "@/utils/axios";

const RoomDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [room, setRoom] = useState<Room | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false); // To track booking status
  const [snackbarMessage, setSnackbarMessage] = useState<string>(""); // For booking feedback

  // Handle Room Booking
  const handleBook = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings`,
        {
          room: id, // Pass the room ID for booking
          startTime: Date.now(),
          endTime: Date.now(),
          // You may also pass additional details such as user ID if needed
        }
      );

      setSnackbarMessage("Room booked successfully!");
      setBookingSuccess(true);
    } catch (err) {
      console.error("Error booking room:", err);
      setSnackbarMessage("Failed to book the room. Please try again.");
    }
  };

  useEffect(() => {
    if (!id) return; // Prevent fetch if id is not defined

    const fetchRoomData = async () => {
      setLoading(true);
      setError(null); // Clear any previous errors
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms/${id}`
        );
        setRoom(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch room information. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [id]); // Ensure it runs when id is available

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

  if (!room) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
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
        onBook={handleBook} // Pass the booking handler
      />

      {/* Snackbar for feedback on booking */}
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={4000}
        onClose={() => setSnackbarMessage("")}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default RoomDetailsPage;
