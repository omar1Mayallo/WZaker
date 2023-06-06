//________________________IMPORTS________________________//
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SubHead from "../../components/Heading/SubHead";
import {footerText} from "../../../data/texts";
import {navLinks} from "../../../data/links";
import {slugify} from "../../helpers";
import {Link} from "react-router-dom";

//________________________TYPES________________________//

//________________________COMPONENTS________________________//
const Footer: React.FC = () => {
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
                <SubHead head={"Reminder"} />
                <Typography sx={{fontSize: "15px", letterSpacing: "0.5px"}}>
                  {footerText}
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
                <SubHead head={"Quick Links"} />
                <List dense={true}>
                  {navLinks.map((item, idx) => (
                    <ListItem
                      key={idx}
                      component={Link}
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
                <SubHead head={"Join Us"} />
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: {lg: "start", xs: "center"},
                    mt: 3,
                  }}
                >
                  <GitHubIcon sx={{color: "#fff", fontSize: "35px"}} />
                  <FacebookRoundedIcon sx={{color: "#fff", fontSize: "35px"}} />
                  <LinkedInIcon sx={{color: "#fff", fontSize: "35px"}} />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography sx={{textAlign: "center", color: "GrayText", my: 2}}>
          &copy; 2023 WZaker. All rights reserved to{" "}
          <MuiLink href={"https://github.com/omar1Mayallo"} target="_blank">
            OTM
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
