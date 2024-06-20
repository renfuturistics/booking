// data/rooms.ts

interface Room {
    imageUrl: string;
    title: string;
    description: string;
    size: string;
    beds: number;
    capacity: number;
    price: string;
    slug: string; // Unique identifier for each room
    gender: 'male' | 'female'; // Gender specification for the room
}

const roomsData: Room[] = [
    {
        imageUrl: '/images/IMG_3305.jpeg',
        title: 'Single Room',
        description: 'A cozy single room for personal space and privacy.',
        size: '25m2',
        beds: 1,
        capacity: 1,
        price: 'K500 ',
        slug: 'single-room', // Example slug
        gender: 'male', // Specify male gender
    },
    {
        imageUrl: '/images/IMG_3306.jpeg',
        title: 'Double Room',
        description: 'A spacious double room for two people.',
        size: '30m2',
        beds: 1,
        capacity: 2,
        price: 'K800 ',
        slug: 'double-room', // Example slug
        gender: 'female', // Specify female gender
    },
    {
        imageUrl: '/images/IMG_3315.jpeg',
        title: 'Apartment',
        description: 'A luxurious apartment with more space and amenities.',
        size: '50m2',
        beds: 2,
        capacity: 4,
        price: 'K1500 ',
        slug: 'apartment', // Example slug
        gender: 'male', // Specify male gender
    },
    // Add more rooms as needed
];

export default roomsData;
