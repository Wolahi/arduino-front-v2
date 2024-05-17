import axios from 'axios';
import useSWR from 'swr';

export default function useGetTemp() {
  const todosEndpoint = 'https://arduinoserv.onrender.com/now/temp';

  // eslint-disable-next-line consistent-return
  const getData = async () => {
    try {
      const response = await axios.get(todosEndpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const { data: currentData } = useSWR(todosEndpoint, getData);

  return {
    temp: currentData,
  };
}
