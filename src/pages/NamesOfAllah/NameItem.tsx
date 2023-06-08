import {Paper, Typography} from "@mui/material";

export type NameItemProps = {name: string; transliteration: string};

export const NameItem: React.FC<NameItemProps> = ({name, transliteration}) => {
  return (
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
        {name}
      </Typography>
      <Typography variant="body2" align="center">
        {transliteration}
      </Typography>
    </Paper>
  );
};

export default NameItem;
