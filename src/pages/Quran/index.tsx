import {Box, Container, Alert, Grid} from "@mui/material";
import bgDen from "../../assets/bg-den.png";
import useSurahs from "./useSurahs";
import Loader from "../../shared/components/Loader";
import CircleItem from "../../shared/components/CircleItem/CircleItem";
import {useNavigate} from "react-router-dom";

const Quran: React.FC = () => {
  const navigate = useNavigate();
  // GET All Surahs
  const {isLoading, isError, data, error} = useSurahs();

  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: `url(${bgDen})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="md" sx={{py: 3}}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert severity="error">{error.message}</Alert>
        ) : (
          <>
            <Grid container spacing={3} justifyContent="center">
              {data?.map((item) => (
                <Grid key={item.id} item xs={12 / 3} sm={12 / 5} md={12 / 6}>
                  <CircleItem
                    nameEn={item.name_simple}
                    nameAr={item.name_arabic}
                    handleNavigate={() => navigate(`/quran/surah/${item.id}`)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Quran;
