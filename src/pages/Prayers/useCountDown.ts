import moment from "moment";
import {useState, useEffect} from "react";
import {PrayersI} from "./usePrayersData";

export default function useCountDown(prayers: PrayersI) {
  // CountDown & CurrentPrayer State
  const [currentPrayer, setCurrentPrayer] = useState("");
  const [countdown, setCountdown] = useState("00 : 00 : 00");

  useEffect(() => {
    // Calculate the upcoming prayer
    const now = moment();
    const upcomingPrayer = Object.entries(prayers).find(([_, time]) => {
      const prayerTime = moment(time, "HH:mm");
      return prayerTime.isAfter(now);
    });

    if (upcomingPrayer) {
      const [prayer, time] = upcomingPrayer;
      setCurrentPrayer(prayer);
      startCountdown(time);
    }
  }, [prayers]);

  const startCountdown = (endTime: string) => {
    // every 1s diff now and endTime
    setInterval(() => {
      const now = moment();
      const end = moment(endTime, "HH:mm");
      const duration = moment.duration(end.diff(now));

      const hours = Math.floor(duration.asHours());
      const minutes = Math.floor(duration.asMinutes()) % 60;
      const seconds = Math.floor(duration.asSeconds()) % 60;

      setCountdown(`${hours} : ${minutes} : ${seconds}`);
    }, 1000);
  };

  return {currentPrayer, countdown};
}
