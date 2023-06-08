import axios, {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import moment from "moment";

interface AsamaAlHosnaI {
  name: string;
  transliteration: string;
  number: 1;
  en: {
    meaning: string;
  };
}

const useNamesOfAllah = () => {
  const getAsamaAlHosna = async () => {
    const {data} = await axios.get(`https://api.aladhan.com/v1/asmaAlHusna`);
    return data.data as AsamaAlHosnaI[];
  };

  return useQuery<AsamaAlHosnaI[], AxiosError>({
    queryKey: ["al-asmaa-alhosna"],
    queryFn: getAsamaAlHosna,
    staleTime: moment.duration(1, "day").asMilliseconds(),
  });
};

export default useNamesOfAllah;
