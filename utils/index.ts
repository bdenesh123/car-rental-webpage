import { Car } from "@/constants/cars";
import { CarProps } from "@/types";

export const calculateCarRentPerHour = (car: Car) => {
  // Extract numeric HP from string like "120 hp"
  const hp = parseInt(car.horsepower);

  let pricePerHour = 0;

  if (hp <= 80) pricePerHour = 6;
  else if (hp <= 110) pricePerHour = 10;
  else if (hp <= 150) pricePerHour = 15;
  else if (hp <= 200) pricePerHour = 22;
  else pricePerHour = 30;

  return pricePerHour.toFixed(2); // returns string like "15.00"
};
