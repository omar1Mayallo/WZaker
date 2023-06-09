import {Box, Container, Grid, Alert} from "@mui/material";
import bgDen from "../../assets/bg-den.png";
import Loader from "../../shared/components/Loader";
import useNamesOfAllah from "./useNamesOfAllah";
import CircleItem from "../../shared/components/CircleItem/CircleItem";

const NamesOfAllah: React.FC = () => {
  const {isLoading, isError, data, error} = useNamesOfAllah();

  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: `url(${bgDen})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="xl" sx={{py: 3}}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert severity="error">{error.message}</Alert>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {data?.map((item) => (
              <Grid
                key={item.name}
                item
                xs={12 / 3}
                sm={12 / 5}
                md={12 / 6}
                lg={12 / 10}
                xl={12 / 12}
              >
                <CircleItem nameAr={item.name} nameEn={item.transliteration} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default NamesOfAllah;
