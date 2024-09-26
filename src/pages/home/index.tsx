import { Input } from '@/components/ui/input';
import useCountriesQuery from '@/hooks/useCountriesQuery';
import { SearchIcon } from 'lucide-react';

export default function Home() {
  const { countries, isLoading } = useCountriesQuery();

  console.log(countries);
  return (
    <div className="container mt-10">
      {countries && (
        <div className="flex flex-col gap-12">
          <div className="max-w-[600px] relative">
            <SearchIcon size={22} className='ml-5 absolute left-0 top-3' />
            <Input placeholder='Search for a country' className='pl-14' />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
            {countries.map((country, index) => (
              <div className="bg-card flex flex-col" key={index}>
                <div className="w-full h-[150px]">
                  <img
                    alt={country}
                    className="object-cover h-full w-full overflow-hidden"
                    src={country.flags.png}
                  />
                </div>

                <div className="flex p-5 py-6 flex-col gap-2">
                  <span className="font-semibold text-lg my-3">{country.name.common}</span>
                  <span>
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString()}
                  </span>
                  <span>
                    <span className="font-semibold">Region: </span>
                    {country.region}
                  </span>
                  <span>
                    <span className="font-semibold">Capital: </span>
                    {country.capital}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
