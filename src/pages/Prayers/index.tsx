import {Box, Container, Stack, List, Divider, Alert} from "@mui/material";
import CountdownTimer from "./CountdownTimer";
import PrayerListItem from "./PrayersListItem";
import bgDen from "../../assets/bg-den.png";
import useGeolocation from "../../shared/context/Geolocation/useGeolocation";
import useCountDown from "./useCountDown";
import usePrayersData from "./usePrayersData";
import Loader from "../../shared/components/Loader";

const Prayers: React.FC = () => {
  // GeolocationState
  const {geolocation, geolocationError, geolocationLoading} = useGeolocation();

  // PrayersData
  const {loading, error, prayers} = usePrayersData();

  // ContDownTimer & CurrentPrayer
  const {currentPrayer, countdown} = useCountDown(prayers);

  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: `url(${bgDen})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="lg" sx={{py: 4}}>
        {geolocationLoading ? (
          <Loader />
        ) : geolocationError ? (
          <Alert severity="error">
            User don't access his/her location yet !
          </Alert>
        ) : loading ? (
          <Loader />
        ) : error ? (
          <Alert severity="error">{error.message}</Alert>
        ) : (
          <Stack direction="column" alignItems={"center"}>
            {/* PRAYERS_TIMER_LIST */}
            {!geolocation.latitude && !geolocation.longitude && (
              <Alert severity="info">
                Please access your location to show the prayers times based on
                your location
              </Alert>
            )}

            <Box
              sx={{
                width: "100%",
                maxWidth: 400,
                bgcolor: `#090e21`,
                boxShadow: "0 1px 16px 0 rgba(0,0,0,.3)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              {/* Countdown_Timer */}
              <CountdownTimer prayer={currentPrayer} countdown={countdown} />

              {/* Prayers_List */}
              <List
                sx={{
                  width: "100%",
                  bgcolor: `#090e21`,
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
        )}
      </Container>
    </Box>
  );
};

export default Prayers;
