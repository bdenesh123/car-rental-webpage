import { CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCarsDirect } from "@/utils/fetchCars";

export default async function Home({ searchParams }: HomeProps) {
  const search = await searchParams;

  const allCars = fetchCarsDirect({
    manufacturer: search.manufacturer ?? "",
    model: search.model ?? "",
    year: search.year ?? "",
    fuel: search.fuel ?? "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0;

  console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
