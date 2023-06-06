import mainBanner from "../../../../assets/main-banner.jpg";
import {Box, Container, Stack, Typography} from "@mui/material";

const MainSection: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${mainBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#090e2137",
          backgroundBlendMode: "overlay",
          height: "90vh",
        }}
      >
        <Container maxWidth="lg" sx={{height: "90vh"}}>
          <Stack
            height={"100%"}
            direction="column"
            justifyContent={"center"}
            alignItems={{xs: "center", sm: "start"}}
            textAlign={{xs: "center", sm: "start"}}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                background: `linear-gradient(to right, #0099ff, #ffffff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "calc(50px + 2.5vw)",
                fontWeight: "900",
              }}
            >
              WZaker
            </Typography>
            <Typography
              sx={{
                color: "white",
                width: {xs: "100%", sm: "80%", md: "60%"},
                background: `linear-gradient(to right, #838383, #f3f3f3)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "calc(9px + 1.1vw)",
                fontWeight: "500",
              }}
            >
              Welcome to our Islamic website , a comprehensive platform
              dedicated to enhancing your spiritual journey and enriching your
              knowledge about Islam.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MainSection;
