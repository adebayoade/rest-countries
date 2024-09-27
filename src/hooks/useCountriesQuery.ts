import api from '@/lib/axios';
import { Region } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useCountriesQuery = (region: Region, term = '') => {
  const getCountriesFromServer = async () => {
    try {
      if (term) {
        const res = await api.get(`/v3.1${term && `/name/${term}`}`);
        const { data } = res;
        return data;
      }

      if (region) {
        const res = await api.get(`/v3.1${region !== 'all' ? `/region/${region}` : '/all'}`);
        const { data } = res;
        return data;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const {
    data: countries,
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryFn: () => getCountriesFromServer(),
    queryKey: ['countries', { region, term }],
  });

  return { countries, isFetching, isLoading, isError };
};

export default useCountriesQuery;
