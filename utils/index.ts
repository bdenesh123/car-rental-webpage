import { CarProps, FilterProps } from "@types";

export const calculateCarRentPerHour = (car: CarProps) => {
  const { year, class: carClass } = car;
  const currentYear = new Date().getFullYear();

  let basePricePerDay = 0;
  switch (carClass) {
    case "hatchback":
      basePricePerDay = 80;
      break;
    case "sedan":
      basePricePerDay = 120;
      break;
    case "suv":
      basePricePerDay = 180;
      break;
    case "electric":
      basePricePerDay = 200;
      break;
    default:
      basePricePerDay = 100;
  }

  const ageAdjustment = (currentYear - year) * 3;

  const rentalPerDay = basePricePerDay + ageAdjustment;

  const rentalPerHour = rentalPerDay / 24;

  return rentalPerHour.toFixed(2);
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
