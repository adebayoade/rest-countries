import api from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';


const useCountriesQuery = () => {
  const getCountriesFromServer = async () => {
    try {
      const res = await api.get('/v3.1/all');
      const { data: data } = await res;
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data: countries, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: () => getCountriesFromServer(),
  });

  return { countries, isLoading };
};

export default useCountriesQuery;