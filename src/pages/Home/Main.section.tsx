import mainBanner from "../../assets/Images/main-banner.jpg";
import {Box, Container, Stack, List, Divider} from "@mui/material";
import CountdownTimer from "../../components/common/CountdownTimer";
import PrayerListItem from "../../components/common/PrayerListItem";

const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${mainBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent={{xs: "center", sm: "end"}}>
          {/* PRAYERS_TIMER_LIST */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              marginTop: "45px",
              bgcolor: `#090e21`,
              color: "white",
            }}
          >
            {/* Countdown_Timer */}
            <CountdownTimer prayer="Fajr" />

            {/* Prayers_List */}
            <List
              sx={{
                width: "100%",
                bgcolor: `#090e2199`,
                color: "rgba(255,255,255,.5)",
                boxShadow: "0 1px 16px 0 rgba(0,0,0,.3)",
              }}
              component="div"
              disablePadding
            >
              {["Fajr", "Sunrise", "Duhr", "Asr", "Maghrib", "Isha"].map(
                (item, idx, arr) => (
                  <>
                    <PrayerListItem prayer={item} time="4.18 AM" />
                    {idx !== arr.length - 1 && (
                      <Divider sx={{borderColor: "#ffffff50"}} />
                    )}
                  </>
                )
              )}
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainSection;
