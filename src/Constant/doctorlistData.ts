export type Speciality = {
  id: number;
  title: string;
  description: string;
};

export type Doctor = {
  id: number;
  name: string;
  speciality: string; // speciality id reference
  phone: string;
  email: string;
  rating: number;
  fees: number;
  createdAt: string;
  updatedAt: string;
  image: string;
};

// -------------------- SPECIALITIES --------------------

export const specialities: Speciality[] = [
  { id: 1, title: "Dermatologist", description: "Expert in skin, hair, and nail conditions" },
  { id: 2, title: "Cardiologist", description: "Specialist in heart and blood vessels" },
  { id: 3, title: "Orthopedic Surgeon", description: "Expert in muscles, bones, and joints" },
  { id: 4, title: "Neurologist", description: "Specialist in disorders of the nervous system" },
  { id: 5, title: "Pediatrician", description: "Doctor specializing in children's health" },
  { id: 6, title: "Ophthalmologist", description: "Expert in eye care and vision" },
  { id: 7, title: "Endocrinologist", description: "Specialist in hormone-related disorders" },
  { id: 8, title: "Gastroenterologist", description: "Expert in digestive system diseases" },
  { id: 9, title: "Psychiatrist", description: "Specialist in mental health" },
  { id: 10, title: "Urologist", description: "Expert in urinary tract and male reproductive system" }
];

// -------------------- DOCTORS --------------------

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    speciality: "1",
    phone: "123-456-7890",
    email: "sarah.thompson@medikart.com",
    rating: 4.8,
    fees: 500,
    createdAt: "2024-11-04T13:00:00Z",
    updatedAt: "2024-11-10T10:00:00Z",
    image: "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    speciality: "2",
    phone: "123-456-7891",
    email: "james.wilson@medikart.com",
    rating: 4.6,
    fees: 700,
    createdAt: "2024-10-12T09:00:00Z",
    updatedAt: "2024-10-18T11:00:00Z",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    speciality: "3",
    phone: "123-456-7892",
    email: "emily.carter@medikart.com",
    rating: 4.7,
    fees: 600,
    createdAt: "2024-09-01T08:30:00Z",
    updatedAt: "2024-09-10T12:00:00Z",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    speciality: "4",
    phone: "123-456-7893",
    email: "michael.brown@medikart.com",
    rating: 4.5,
    fees: 550,
    createdAt: "2024-08-15T14:00:00Z",
    updatedAt: "2024-08-20T16:00:00Z",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg"
  },
  {
    id: 5,
    name: "Dr. Olivia Davis",
    speciality: "5",
    phone: "123-456-7894",
    email: "olivia.davis@medikart.com",
    rating: 4.9,
    fees: 800,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-15T12:00:00Z",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
  },
  {
    id: 6,
    name: "Dr. David Miller",
    speciality: "6",
    phone: "123-456-7895",
    email: "david.miller@medikart.com",
    rating: 4.4,
    fees: 450,
    createdAt: "2024-06-05T09:00:00Z",
    updatedAt: "2024-06-10T11:00:00Z",
    image: "https://images.pexels.com/photos/6129042/pexels-photo-6129042.jpeg"
  },
  {
    id: 7,
    name: "Dr. Sophia Anderson",
    speciality: "7",
    phone: "123-456-7896",
    email: "sophia.anderson@medikart.com",
    rating: 4.7,
    fees: 900,
    createdAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-05-05T11:00:00Z",
    image: "https://images.pexels.com/photos/5998482/pexels-photo-5998482.jpeg"
  },
  {
    id: 8,
    name: "Dr. Daniel Thomas",
    speciality: "8",
    phone: "123-456-7897",
    email: "daniel.thomas@medikart.com",
    rating: 4.3,
    fees: 500,
    createdAt: "2024-04-10T09:30:00Z",
    updatedAt: "2024-04-15T10:30:00Z",
    image: "https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg"
  },
  {
    id: 9,
    name: "Dr. Ava Martinez",
    speciality: "9",
    phone: "123-456-7898",
    email: "ava.martinez@medikart.com",
    rating: 4.6,
    fees: 650,
    createdAt: "2024-03-18T13:00:00Z",
    updatedAt: "2024-03-22T14:00:00Z",
    image: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg"
  },
  {
    id: 10,
    name: "Dr. William Garcia",
    speciality: "10",
    phone: "123-456-7899",
    email: "william.garcia@medikart.com",
    rating: 4.2,
    fees: 400,
    createdAt: "2024-02-25T08:00:00Z",
    updatedAt: "2024-02-28T09:00:00Z",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
  }
];