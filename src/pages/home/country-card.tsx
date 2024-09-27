import { Country } from '@/types';
import { Link } from 'react-router-dom';

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      to={`/country?name=${country.name.common.toLowerCase()}`}
      className="bg-card hover:bg-primary/5 flex flex-col shadow-md rounded-lg"
    >
      <div className="w-full h-[150px]">
        <img
          alt={country.name.common}
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
    </Link>
  );
}
