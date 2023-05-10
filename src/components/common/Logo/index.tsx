import {Box, Typography} from "@mui/material";

export default function Logo() {
  return (
    <Typography
      variant="h6"
      sx={{
        my: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={"span"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0099ff",
          height: "30px",
          width: "30px",
          fontSize: "25px",
          fontWeight: "bolder",
          mr: 0.5,
          p: 2,
          borderRadius: "4px",
        }}
      >
        W
      </Box>
      Zaker
    </Typography>
  );
}
