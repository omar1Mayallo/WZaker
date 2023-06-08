import {Box, CircularProgress} from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="75vh"
    >
      <CircularProgress />
    </Box>
  );
};
export default Loader;
