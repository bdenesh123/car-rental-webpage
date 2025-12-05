import { cars, Car } from "@/constants/cars";

interface FilterProps {
  manufacturer?: string;
  model?: string;
  year?: string;
  fuel?: string;
  classType?: string;
}

export function fetchCarsDirect({
  manufacturer = "",
}: {
  manufacturer?: string;
}) {
  return cars.filter((car) => {
    return manufacturer
      ? car.make.toLowerCase() === manufacturer.toLowerCase()
      : true;
  });
}
