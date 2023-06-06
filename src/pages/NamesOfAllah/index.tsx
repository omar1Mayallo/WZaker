import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import bgDen from "../../assets/bg-den.png";

const LoadingComponent: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
};
interface AsamaAlHosnaI {
  name: string;
  transliteration: string;
  number: 1;
  en: {
    meaning: string;
  };
}

const NamesOfAllah: React.FC = () => {
  const [asamaAlHosna, setAsamaAlHosna] = useState<AsamaAlHosnaI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getAsamaAlHosna = async () => {
    try {
      const res = await axios.get(`https://api.aladhan.com/v1/asmaAlHusna`);
      setAsamaAlHosna(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAsamaAlHosna();
  }, []);

  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: `url(${bgDen})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{textAlign: "center", py: 3}}>
            <LoadingComponent />
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="center" py={3}>
            {asamaAlHosna.map((item) => (
              <Grid
                key={item.name}
                item
                xs={12 / 3}
                sm={12 / 5}
                md={12 / 6}
                lg={12 / 10}
                xl={12 / 12}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 100,
                    mx: "auto",
                    borderRadius: "50%",
                    background: "#161a2c",
                    color: "white",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Typography variant="h6" align="center">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {item.transliteration}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default NamesOfAllah;
