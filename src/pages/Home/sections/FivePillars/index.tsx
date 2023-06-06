import phanosImage from "../../../../assets/phanos.jpg";
import {Box, Container, Grid} from "@mui/material";
import Text from "../../../../shared/components/Text";
import MainHead from "../../../../shared/components/Heading/MainHead";
import PillarItem from "./PillarItem";
import {FivePillarsData} from "../../../../data/Pillars";

export const FivePillarsSection: React.FC = () => {
  return (
    <Box
      component={"section"}
      sx={{
        py: 5,
        backgroundImage: `url(${phanosImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#090e21",
        backgroundBlendMode: "overlay",
        minHeight: "650px",
      }}
    >
      <Container maxWidth={"lg"}>
        <MainHead head={"The Five Pillars Of Islam"} color="white" />
        <Grid
          container
          spacing={2}
          columns={20}
          sx={{color: "white", textAlign: "center", justifyContent: "center"}}
        >
          {FivePillarsData.map((item, idx) => (
            <Grid item xs={10} sm={20 / 3} md={4} key={idx}>
              <PillarItem idx={idx} {...item} />
            </Grid>
          ))}
        </Grid>
        <Box textAlign={"center"} maxWidth={"750px"} mx={"auto"}>
          <Text
            text={
              "There is only one Allah and Hazrat Muhammad (ﷺ) is the last Prophet Of Allah. Muslims pray five times a day: at dawn, at noon, in the afternoon, at sunset, and in the evening. Fasting during the month of Ramadan. Paying an charity to benefit the poor and the needy. Pilgrimage to Mecca, the holy city in Saudi Arabia."
            }
            color="white"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FivePillarsSection;
