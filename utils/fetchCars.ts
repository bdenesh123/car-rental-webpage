import { cars, Car } from "@/constants/cars";

interface FilterProps {
  manufacturer?: string;
}

export function fetchCarsDirect({
  manufacturer = "",
}: {
  manufacturer?: string;
}): Car[] {
  return cars.filter((car) => {
    return manufacturer
      ? car.make.toLowerCase() === manufacturer.toLowerCase()
      : true;
  });
}
