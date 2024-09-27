import { Input } from '@/components/ui/input';
import useCountriesQuery from '@/hooks/useCountriesQuery';
import { SearchIcon } from 'lucide-react';
import CountryCard from './country-card';
import { Country, Region } from '@/types';
import Spinner from '@/components/ui/spinner';
import { Key, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  const [region, setRegion] = useState<Region>('all');
  const [term, setTerm] = useState('');
  const { countries, isError, isLoading } = useCountriesQuery(region, term);

  const handleRegionSelect = (region: Region) => {
    setRegion(region);
  };

  return (
    <div className="container mt-10 flex flex-col gap-12">
      <div className="flex gap-5 justify-between">
        <div className="w-full max-w-[600px] relative">
          <SearchIcon size={22} className="ml-5 absolute left-0 top-3" />
          <Input
            onChange={e => {
              setRegion('all');
              setTerm(e.target.value);
            }}
            placeholder="Search for a country"
            className="pl-14 shadow-md"
          />
        </div>

        <Select value={region} onValueChange={value => handleRegionSelect(value as Region)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter By Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="america">America</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        'Error'
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
          {countries?.map((country: Country, index: Key) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
