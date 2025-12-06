import { Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import { HomeProps } from "@/types";
import { fetchCarsDirect } from "@/utils/fetchCars";

export default async function Home({ searchParams }: HomeProps) {
  const search = await searchParams;

  const allCars = fetchCarsDirect({
    manufacturer: search.manufacturer ?? "",
  });

  const isDataEmpty = !(allCars?.length > 0);

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

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
