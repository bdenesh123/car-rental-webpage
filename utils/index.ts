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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
