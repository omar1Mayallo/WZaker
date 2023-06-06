import {useState, useEffect} from "react";
import {Box, Container, Stack, List, Divider} from "@mui/material";
import CountdownTimer from "./CountdownTimer";
import PrayerListItem from "./PrayersListItem";
import {getCurrentData} from "../../shared/helpers";
import axios from "axios";
import bgDen from "../../assets/bg-den.png";
import moment from "moment";

interface PrayersI {
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

const Prayers: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [prayers, setPrayers] = useState<PrayersI>(PrayersObj);
  const {month, year} = getCurrentData();

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log("Error retrieving location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(
          `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}`
        )
        .then((res) => setPrayers(res.data.data[14].timings));
    }
  }, [latitude, longitude, year, month]);

  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: `url(${bgDen})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent={"center"} py={5}>
          {/* PRAYERS_TIMER_LIST */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              bgcolor: `#090e21`,
              boxShadow: "0 1px 16px 0 rgba(0,0,0,.3)",
              color: "white",
            }}
          >
            {/* Countdown_Timer */}
            <CountdownTimer prayer={currentPrayer} countdown={countdown} />

            {/* Prayers_List */}
            <List
              sx={{
                width: "100%",
                bgcolor: `#090e2199`,
                color: "rgba(255,255,255,.5)",
              }}
              component="div"
              disablePadding
            >
              {Object.entries(prayers)
                .map(([key, value]) => ({[key]: value}))
                .map((item, idx, arr) => {
                  const [prayerName] = Object.keys(item);
                  const [prayerTime] = Object.values(item);
                  return (
                    <div key={idx}>
                      <PrayerListItem
                        prayerName={prayerName}
                        prayerTime={prayerTime}
                        active={prayerName === currentPrayer}
                      />
                      {idx !== arr.length - 1 && (
                        <Divider sx={{borderColor: "#ffffff50"}} />
                      )}
                    </div>
                  );
                })}
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Prayers;
