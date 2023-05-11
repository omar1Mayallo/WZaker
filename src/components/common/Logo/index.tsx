import {Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <Typography
      onClick={() => navigate("/")}
      variant="h6"
      sx={{
        my: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
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
