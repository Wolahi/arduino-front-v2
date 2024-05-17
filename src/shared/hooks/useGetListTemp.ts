import axios from 'axios';
import useSWR from 'swr';

export default function useGetListTemp() {
  const todosEndpoint = 'https://arduinoserv.onrender.com/temp/list';

  const getData = async (
    url: string,
  ): Promise<{ id: number; value: number; data: string }[]> => {
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  const { data: currentData } = useSWR(todosEndpoint, getData, {
    refreshInterval: 10000,
  });

  return {
    tempList: currentData,
  };
}
