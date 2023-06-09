import {Paper, Typography} from "@mui/material";

interface CircleItemProps {
  nameAr: string;
  nameEn: string;
  handleNavigate?: () => void;
}

export const CircleItem: React.FC<CircleItemProps> = ({
  nameAr,
  nameEn,
  handleNavigate,
}) => {
  return (
    <>
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
        onClick={handleNavigate}
      >
        <Typography variant="h6" align="center">
          {nameAr}
        </Typography>
        <Typography variant="body2" align="center">
          {nameEn}
        </Typography>
      </Paper>
    </>
  );
};

export default CircleItem;
