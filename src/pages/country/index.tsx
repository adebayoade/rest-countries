import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import useCountryQuery from '@/hooks/useCountryQuery';
import { ArrowLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Country() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';

  const { country, isLoading, isError } = useCountryQuery(name);

  return (
    <div className="container mt-10">
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Alert variant={'destructive'}>An error occurred</Alert>
      ) : (
        country && (
          <div className="flex flex-col gap-12">
            <Link to="/">
              <Button className="w-max" size={'lg'} variant={'outline'}>
                <ArrowLeft className="mr-3" /> Back
              </Button>
            </Link>

            <div className="grid items-center grid-cols-1 xl:grid-cols-2 gap-10">
              <div className="">
                <img
                  alt={country[0].name.common}
                  className="object-cover h-full w-full overflow-hidden"
                  src={country[0].flags.png}
                />
              </div>

              <div className="flex flex-col gap-5">
                <span className="font-bold text-3xl my-3">{country[0]?.name.common}</span>

                <div className="flex flex-col xl:lg:flex-row gap-10">
                  <div className="basis-full flex flex-col gap-3">
                    {/* {country[0].name?.nativeName && (
                      <span>
                        <span className="font-semibold">Native Name: </span>
                        {country[0].name.nativeName.eng.official}
                      </span>
                    )} */}
                    <span>
                      <span className="font-semibold">Population: </span>
                      {country[0]?.population.toLocaleString()}
                    </span>
                    <span>
                      <span className="font-semibold">Region: </span>
                      {country[0]?.region}
                    </span>
                    <span>
                      <span className="font-semibold">Sub Region: </span>
                      {country[0]?.subregion}
                    </span>
                    <span>
                      <span className="font-semibold">Capital: </span>
                      {country[0]?.capital}
                    </span>
                  </div>

                  <div className="basis-full flex flex-col gap-3">
                    <span>
                      <span className="font-semibold">Top Level Domain: </span>
                      {country[0]?.capital}
                    </span>
                    <span>
                      <span className="font-semibold">Currencies: </span>
                      {Object.keys(country[0]?.currencies)[0]}
                    </span>
                    <span>
                      <span className="font-semibold">Languages: </span>
                      {Object.keys(country[0]?.languages)[0]}
                    </span>
                  </div>
                </div>

                {country[0]?.borders && (
                  <div className="mt-5 flex flex-col lg:flex-row gap-5 lg:items-center">
                    <span className="font-semibold">Border Countries:</span>
                    <div className="flex gap-5">
                      {/* {Object.keys(country[0]?.borders).map(c => (
                        <span className="py-1 px-6 border bg-card">{country[c]}</span>
                      ))} */}
                    </div>
                  </div>
                )}
                {/* {country[0]?.borders && (
                  <div className="mt-5 flex flex-col lg:flex-row gap-5 lg:items-center">
                    <span className="font-semibold">Border Countries:</span>
                    <div className="flex gap-5">
                      <span className="py-1 px-6 border bg-card">France</span>
                      <span className="py-1 px-6 border bg-card">France</span>
                      <span className="py-1 px-6 border bg-card">France</span>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
