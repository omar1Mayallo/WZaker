import axios, {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import moment from "moment";

interface SurahI {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: [number, number];
  translated_name: {
    language_name: string;
    name: string;
  };
}

type SurahsDataI = SurahI[];

const useSurahs = () => {
  const getSurahs = async () => {
    const {data} = await axios.get(
      `https://api.quran.com/api/v4/chapters?language=ar`
    );
    return data.chapters as SurahsDataI;
  };

  return useQuery<SurahsDataI, AxiosError>({
    queryKey: ["surahs"],
    queryFn: getSurahs,
    staleTime: moment.duration(1, "day").asMilliseconds(),
  });
};

export default useSurahs;
