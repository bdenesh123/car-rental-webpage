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
  model = "",
  year = "",
  fuel = "",
  classType = "",
}: FilterProps) {
  return cars.filter((car: Car) => {
    return (
      (manufacturer
        ? car.make.toLowerCase() === manufacturer.toLowerCase()
        : true) &&
      (model ? car.model.toLowerCase().includes(model.toLowerCase()) : true) &&
      (year ? car.year === Number(year) : true) &&
      (fuel ? car.fuel.toLowerCase() === fuel.toLowerCase() : true) &&
      (classType ? car.class === classType : true)
    );
  });
}
