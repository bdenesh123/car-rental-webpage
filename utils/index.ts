import { CarProps, FilterProps } from "@types";

export const calculateCarRentPerHour = (car: CarProps) => {
  const { city_kmpl, year, class: carClass } = car;
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

  const efficiencyAdjustment = (12 - city_kmpl) * 2;
  const ageAdjustment = (currentYear - year) * 3;

  const rentalPerDay = basePricePerDay + ageAdjustment - efficiencyAdjustment;

  const rentalPerHour = rentalPerDay / 24;

  return rentalPerHour.toFixed(2);
};

// export const updateSearchParams = (type: string, value: string) => {
//   // Get the current URL search params
//   const searchParams = new URLSearchParams(window.location.search);

//   // Set the specified search parameter to the given value
//   searchParams.set(type, value);

//   // Set the specified search parameter to the given value
//   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

//   return newPathname;
// };

// export const deleteSearchParams = (type: string) => {
//   // Set the specified search parameter to the given value
//   const newSearchParams = new URLSearchParams(window.location.search);

//   // Delete the specified search parameter
//   newSearchParams.delete(type.toLocaleLowerCase());

//   // Construct the updated URL pathname with the deleted search parameter
//   const newPathname = `${
//     window.location.pathname
//   }?${newSearchParams.toString()}`;

//   return newPathname;
// };

export const generateCarImageUrl = (car: CarProps, angle: string = "front") => {
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
  url.searchParams.append("angle", angle);

  return url.toString();
};
