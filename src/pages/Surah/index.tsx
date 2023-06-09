import Loader from "../../shared/components/Loader";
import {
  Alert,
  Stack,
  Typography,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import useAyahsSurah from "./useSurah";

const Surah: React.FC = () => {
  const theme = useTheme();
  const {isLoading, isError, data, error} = useAyahsSurah();

  return (
    <Box component={"section"}>
      <Container maxWidth="lg">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert severity="error">{error.message}</Alert>
        ) : (
          <>
            <Stack
              direction="column"
              justifyContent="center"
              sx={{direction: "rtl"}}
            >
              {data?.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(1),
                    margin: theme.spacing(2),
                  }}
                >
                  <Typography sx={{fontSize: "22px"}}>
                    {item.text}({item.numberInSurah})
                  </Typography>
                </Box>
              ))}
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Surah;
