import {Typography, Box} from "@mui/material";
interface IFooterHeadProps {
  head: string;
}
export default function FooterHead({head}: IFooterHeadProps) {
  return (
    <Typography
      variant={"h3"}
      sx={{
        fontSize: "19px",
        fontWeight: "600",
        fontFamily: "Poppins",
        mb: 1.5,
      }}
    >
      <Box component={"span"} sx={{borderBottom: "2px solid #cb0a34"}}>
        {head}
      </Box>
    </Typography>
  );
}
