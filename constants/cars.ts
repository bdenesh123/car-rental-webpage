export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  fuel: string;
  transmission: string;
  pricePerDay: number;
  seats: number;
  image: string;
  class: "sedan" | "suv" | "hatchback" | "electric";
}

export const cars: Car[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    fuel: "gas",
    transmission: "automatic",
    pricePerDay: 180,
    seats: 5,
    image: "/cars/corolla.png",
    class: "sedan",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    fuel: "gas",
    transmission: "automatic",
    pricePerDay: 200,
    seats: 5,
    image: "/cars/civic.png",
    class: "sedan",
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    fuel: "electric",
    transmission: "automatic",
    pricePerDay: 350,
    seats: 5,
    image: "/cars/tesla-model3.png",
    class: "electric",
  },
];
