import {useState} from "react";
import {Typography, Box, Container, Grid, Button} from "@mui/material";
import QuranImage from "../../assets/Images/quran-read.webp";

export const TheQuranSection = () => {
  const [readMoreStatus, setReadMoreStatus] = useState<boolean>(false);
  return (
    <Box component={"section"}>
      <Container maxWidth="xl" sx={{py: 5}}>
        {/* MAIN_HEADING */}
        <Typography variant="h3" sx={{textAlign: "center", mb: 5}}>
          <Box
            component={"span"}
            sx={{
              display: "inline-block",
              minWidth: "200px",
              fontFamily: "Poppins",
              fontSize: "40px",
              fontWeight: "300",
            }}
          >
            TheQuran
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 456.99 38"
              style={{display: "block"}}
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    style={{fill: "#cb0a34"}}
                    d="M456.28,8.29a4.6,4.6,0,0,0,.29-.59c0-.11.08-.21.11-.31a4.56,4.56,0,0,0,.21-.72l0-.21A6.11,6.11,0,0,0,457,5.6h0a5.5,5.5,0,1,0-9.24,4C422.6,9.89,288,9.52,281.13,9.52h-31c-7.86,0-15.13,2.18-21.14,7.26a30.14,30.14,0,0,0-8.72-5.25c-4.68-1.82-9.42-2-14.32-2H9.24A5.5,5.5,0,1,0,0,5.5v0c0,.05,0,.09,0,.14a3.4,3.4,0,0,0,0,.45c0,.12,0,.23,0,.35l.06.3A1.82,1.82,0,0,0,.22,7,5.48,5.48,0,0,0,4.5,10.9a5.13,5.13,0,0,0,1.12.16c.85,0,1.7,0,2.54,0H209.44a28.85,28.85,0,0,1,19,7.26,28.31,28.31,0,0,0-6.38,9.13L229,38.29,236,27.45h0a28.11,28.11,0,0,0-6.38-9.12A28.8,28.8,0,0,1,241.09,12c4-1.09,8-1,12.14-1H451l.54,0a5.47,5.47,0,0,0,3.21-1l.07,0s0,0,.05-.05a4.53,4.53,0,0,0,.62-.54l.24-.26a6.41,6.41,0,0,0,.39-.52C456.15,8.52,456.21,8.4,456.28,8.29Z"
                  ></path>
                </g>
              </g>
            </svg>
          </Box>
        </Typography>

        {/* About_Quran */}
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
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "calc(11px + 0.35vw)",
                }}
              >
                The Holy Quran is the last revealed word of Allah, and the Seal
                of Prophets, Muhammad (ﷺ) is the one to whom it was revealed.
                Allah has revealed the Quran to His beloved Prophet Hazrat
                Muhammad (ﷺ) and there is no doubt about its divinity. Hazrat
                Muhammad (ﷺ) is the one on whom the Quran descended, as it were.
                The Quran is the light of knowledge and belief, and the Holy
                Prophet (ﷺ) is its practical example and an excellent exemplar.
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "calc(11px + 0.35vw)",
                }}
              >
                Quran is the prime source of every Muslim's faith and practice.
                Quran provides guidelines for a just society, proper human
                conduct and an equitable economic system. The claim is made by
                no one but Allah Almighty Himself. The Quran is guidance and
                leadership, and Hazrat Muhammad (ﷺ) is the guide and leader. The
                Quran is the call and message of Truth, and the Prophet (ﷺ) is
                the inviter and Messenger.
              </p>

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
              src={QuranImage}
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
        {readMoreStatus && (
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "calc(11px + 0.35vw)",
            }}
          >
            The Prophet Hazrat Muhammad (ﷺ) dictated the text to His Companions
            after each Revelation. The word "Quran" is Arabic for "Recitation".
            There is no mistake in the Quran till today and will not be. The
            Quran is a record of the exact words revealed by Allah Almighty
            through the Hazrat Jibrail (A.S) to His beloved Prophet Hazrat
            Muhammad (ﷺ).
            <br />
            It was memorized by Hazrat Muhammad (ﷺ) and then dictated to the
            Companions of Hazrat Muhammad (ﷺ), and written down by scribes, who
            cross-checked it during his lifetime.
            <br />
            <br />
            Allah Himself has taken the responsibility of protecting the Quran,
            And the Qur'an is still safe today as it was revealed. Not one word
            of Quran’s 114 chapters and Surahs has been changed over the
            centuries, so that the Quran is in every detail the unique and
            miraculous text which was revealed to our Prophet Hazrat Muhammad
            (ﷺ) fourteen centuries ago.
            <br />
            The life of our Hazrat Muhammad (ﷺ) was moulded according to the
            Quran and He gave a practical demonstration of whatever the Quran
            said.
          </p>
        )}
        {/* Read_More */}
      </Container>
    </Box>
  );
};

export default TheQuranSection;
