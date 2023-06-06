//________________________IMPORTS________________________//
import {Typography, Box} from "@mui/material";

//________________________TYPES________________________//
interface Props {
  head: string;
}

//________________________COMPONENTS________________________//
const SubHead: React.FC<Props> = ({head}) => {
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
};

export default SubHead;
