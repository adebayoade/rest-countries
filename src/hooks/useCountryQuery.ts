import api from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

const useCountryQuery = (name: string) => {
  const getCountryFromServer = async () => {
    try {
      const res = await api.get(`/v3.1/name/${name}`);
      const { data: data } = res;
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const {
    data: country,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getCountryFromServer(),
    queryKey: ['country'],
  });

  return { country, isLoading, isError };
};

export default useCountryQuery;
