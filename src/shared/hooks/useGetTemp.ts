import axios from 'axios';
import useSWR from 'swr';

export default function useGetTemp() {
  const todosEndpoint = 'https://arduinoserv.onrender.com/now/temp';

  const getData = async (
    url: string,
  ): Promise<{ id: number; value: number; data: string }> => {
    const response = await axios.get(url);
    return response.data;
  };
  const { data: currentData } = useSWR(todosEndpoint, getData, {
    refreshInterval: 10000,
  });

  return {
    temp: currentData,
  };
}
