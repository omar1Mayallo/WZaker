import phanosImage from "../../assets/Images/phanos.jpg";
import ashadImage from "../../assets/Images/shahadah_icon.webp";
import salahImage from "../../assets/Images/salah_icon.webp";
import zakahImage from "../../assets/Images/zakat_icon.webp";
import sawmImage from "../../assets/Images/fasting_icon.webp";
import hajjImage from "../../assets/Images/hajj_icon.webp";
import {Box, Container, Grid} from "@mui/material";
import Text from "../../components/common/Text";
import MainHead from "../../components/common/Heading/MainHead";
import PillarItem from "../../components/common/PillarItem";

interface PillarType {
  PillarEnName: string;
  PillarArName: string;
  icon: string;
}
const FivePillarsData: PillarType[] = [
  {PillarEnName: "Shahadah", PillarArName: "الشهادة", icon: ashadImage},
  {PillarEnName: "Salah", PillarArName: "الصلاة", icon: salahImage},
  {PillarEnName: "Sawm", PillarArName: "الصوم", icon: sawmImage},
  {PillarEnName: "Zakat", PillarArName: "الزكاة", icon: zakahImage},
  {PillarEnName: "Hajj", PillarArName: "الحج", icon: hajjImage},
];

export const FivePillarsSection = () => {
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
