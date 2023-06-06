import {Typography} from "@mui/material";
type TextProps = {text: string; color?: string};
const Text: React.FC<TextProps> = ({text, color}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "calc(12.5px + 0.35vw)",
        color: color ? color : "black",
      }}
    >
      {text}
    </Typography>
  );
};

export default Text;
