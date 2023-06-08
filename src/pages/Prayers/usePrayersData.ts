import axios, {AxiosError} from "axios";
import {useState, useEffect} from "react";
import useGeolocation from "../../shared/context/Geolocation/useGeolocation";
import {getCurrentData} from "../../shared/helpers";

export interface PrayersI {
  [key: string]: string;
}

const PrayersObj: PrayersI = {
  Asr: "00:00",
  Dhuhr: "00:00",
  Fajr: "00:00",
  Firstthird: "00:00",
  Imsak: "00:00",
  Isha: "00:00",
  Lastthird: "00:00",
  Maghrib: "00:00",
  Midnight: "00:00",
  Sunrise: "00:00",
  Sunset: "00:00",
};

export default function usePrayersData() {
  const {
    geolocation: {latitude, longitude},
  } = useGeolocation();
  const {month, year} = getCurrentData();

  // PrayersState
  const [prayers, setPrayers] = useState<PrayersI>(PrayersObj);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  async function getPrayers() {
    if (latitude && longitude) {
      setLoading(true);
      try {
        const {data} = await axios.get(
          `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}`
        );
        setLoading(false);
        setPrayers(data.data[14].timings);
      } catch (err) {
        setError(err as AxiosError);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getPrayers();
  }, [latitude, longitude]);

  return {prayers, loading, error};
}
