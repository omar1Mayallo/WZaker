import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import FooterHead from "../../common/Heading/FooterHead";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link as RouterLink} from "react-router-dom";
import {slugify} from "../../../helper";

export const Footer = () => {
  return (
    <Box component={"footer"} sx={{bgcolor: "#090e21", color: "#fff", py: 4}}>
      <Container maxWidth="xl">
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={4}>
            {/* Reminder */}
            <Grid item lg={4} xs={12}>
              <Box
                sx={{
                  textAlign: {lg: "start", xs: "center"},
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <FooterHead head={"Reminder"} />
                <Typography sx={{fontSize: "15px", letterSpacing: "0.5px"}}>
                  "If you disbelieve, then know that Allah is truly not in need
                  of you, nor does He approve of disbelief from His servants.
                  But if you become grateful through faith, He will appreciate
                  that from you. No soul burdened with sin will bear the burden
                  of another. Then to your Lord is your return, and He will
                  inform you of what you used to do. He certainly knows best
                  what is hidden in the heart".
                </Typography>
                <Box sx={{color: "#d1d1d1"}}>[Quran - 39:7]</Box>
              </Box>
            </Grid>
            {/* Quick Links */}
            <Grid item lg={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: {lg: "start", xs: "center"},
                }}
              >
                <FooterHead head={"Quick Links"} />
                <List dense={true}>
                  {[
                    "Names Of Allah",
                    "Quran",
                    "Azkar",
                    "Hadith",
                    "Prayers Timer",
                  ].map((item, idx) => (
                    <ListItem
                      key={idx}
                      component={RouterLink}
                      to={`/${slugify(item)}`}
                      sx={{
                        maxWidth: "fit-content",
                        py: 0.5,
                        mx: {xs: "auto", lg: "0"},
                      }}
                    >
                      <Box
                        component={"span"}
                        sx={{
                          color: "#f1f1f1",
                          transition: "0.3s",
                          "&:hover": {
                            color: "#868686",
                            pl: 0.7,
                          },
                        }}
                      >
                        {item}
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            {/* Join Us */}
            <Grid item lg={4} sm={6} xs={12}>
              <Box
                sx={{
                  textAlign: {lg: "start", xs: "center"},
                }}
              >
                <FooterHead head={"Join Us"} />
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: {lg: "start", xs: "center"},
                    mt: 3,
                  }}
                >
                  <div>
                    <GitHubIcon sx={{color: "#fff", fontSize: "35px"}} />
                  </div>
                  <div>
                    <FacebookRoundedIcon
                      sx={{color: "#fff", fontSize: "35px"}}
                    />
                  </div>
                  <div>
                    <LinkedInIcon sx={{color: "#fff", fontSize: "35px"}} />
                  </div>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
