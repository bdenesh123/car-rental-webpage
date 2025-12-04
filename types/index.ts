import { MouseEventHandler } from "react";

export interface CarProps {
  make: string;
  model: string;
  year: number;
  fuel: string;
  transmission: string;
  class: "sedan" | "suv" | "hatchback" | "electric";
  seats: number;
  image: string;
  city_kmpl: number;
  combined_kmpl: number;
  highway_kmpl: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: string;
  model?: string;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps | Promise<FilterProps>;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
