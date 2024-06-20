// data/rooms.ts

export interface Room {
    _id: string;
    roomNumber: number
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
    slug: string; // Unique identifier for each room
    gender: 'Male' | 'Female'; // Gender specification for the room
}



