import mainBanner from "../../assets/Images/main-banner.jpg";
import {
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const MainSection = () => {
  const style = {
    width: "100%",
    bgcolor: `#090e2199`,
    color: "rgba(255,255,255,.5)",
    boxShadow: "0 1px 16px 0 rgba(0,0,0,.3)",
  };
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
          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              marginTop: "45px",
              bgcolor: `#090e21`,
              color: "white",
            }}
          >
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,.05)",
                borderRadius: "15px 15px 0 0",
                textAlign: "center",
                p: 3,
              }}
            >
              <Typography sx={{textTransform: "uppercase", fontWeight: "800"}}>
                Upcoming Pray
              </Typography>

              <Stack
                direction="row"
                justifyContent={"center"}
                divider={
                  <Box component={"span"} sx={{fontWeight: "900"}}>
                    :
                  </Box>
                }
                spacing={2}
                mt={2}
              >
                <Box>
                  <Typography>05</Typography> Hours
                </Box>
                <Box>
                  <Typography>13</Typography> Mins
                </Box>
                <Box>
                  <Typography>55</Typography> Sec
                </Box>
              </Stack>
            </Box>
            <List sx={style} component="div" size={"sm"} disablePadding>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <span>Fajr</span>
                <span>4:19 AM</span>
              </ListItem>
              <Divider sx={{borderColor: "#ffffff50"}} />
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <span>Fajr</span>
                <span>4:19 AM</span>
              </ListItem>
              <Divider sx={{borderColor: "#ffffff50"}} />
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <span>Fajr</span>
                <span>4:19 AM</span>
              </ListItem>
              <Divider sx={{borderColor: "#ffffff50"}} />
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <span>Fajr</span>
                <span>4:19 AM</span>
              </ListItem>
              <Divider sx={{borderColor: "#ffffff50"}} />
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.5,
                }}
              >
                <span>Fajr</span>
                <span>4:19 AM</span>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainSection;
