import {useState} from "react";
import {Box, Container, Grid, Button} from "@mui/material";
import MainHead from "../Heading/MainHead";
import Text from "../Text";

export type SectionWithImgProps = {
  secHead: string;
  par1: string;
  par2: string;
  par3: string;
  imgUrl: string;
};
export const SectionWithImg: React.FC<SectionWithImgProps> = ({
  secHead,
  par1,
  par2,
  par3,
  imgUrl,
}) => {
  const [readMoreStatus, setReadMoreStatus] = useState<boolean>(false);
  return (
    <Box component={"section"}>
      <Container maxWidth="xl" sx={{py: 5}}>
        {/* MAIN_HEADING */}
        <MainHead head={secHead} />

        {/* About_sec */}
        <Grid
          container
          spacing={{xs: 2, lg: 5}}
          sx={{
            flexDirection: {xs: "column-reverse", md: "row"},
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={7}>
            <div>
              <Text text={par1} />
              <Text text={par2} />
              <Button
                variant="contained"
                sx={{backgroundColor: "#090e21"}}
                onClick={() => setReadMoreStatus(!readMoreStatus)}
                size="large"
              >
                Read {readMoreStatus ? " Less" : " More"}
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={5} textAlign={"center"}>
            <Box
              component={"img"}
              src={imgUrl}
              loading="lazy"
              alt="quran-img"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: {xs: "300px", md: "380px"},
              }}
            />
          </Grid>
        </Grid>
        {readMoreStatus && <Text text={par3} />}
      </Container>
    </Box>
  );
};

export default SectionWithImg;
