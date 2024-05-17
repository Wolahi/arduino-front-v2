import axios from 'axios';
import { useEffect, useState } from 'react';

interface Location {
  city?: string;
}

export default function useGeoLocation() {
  const [locationData, setLocationData] = useState<Location>();

  async function getLocation() {
    const res = await axios.get('http://ip-api.com/json');
    if (res.status === 200) setLocationData(res.data);
  }

  useEffect(() => {
    getLocation();
  }, []);

  return {
    city: locationData?.city,
  };
}
