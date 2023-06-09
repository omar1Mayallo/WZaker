import axios, {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import moment from "moment";
import {useParams} from "react-router-dom";

interface AyahI {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

type SurahI = AyahI[];

const useAyahsSurah = () => {
  const {surahId} = useParams();

  const getAyahsOfSurah = async () => {
    const {data} = await axios.get(
      `https://api.alquran.cloud/v1/surah/${surahId}`
    );
    return data.data.ayahs as SurahI;
  };

  return useQuery<SurahI, AxiosError>({
    queryKey: ["surah", surahId],
    queryFn: getAyahsOfSurah,
    staleTime: moment.duration(1, "day").asMilliseconds(),
  });
};

export default useAyahsSurah;
