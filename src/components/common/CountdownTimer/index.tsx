import {Box, Typography, Stack} from "@mui/material";

export type CountdownTimerProps = {prayer: string};
export const CountdownTimer: React.FC<CountdownTimerProps> = ({prayer}) => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(255,255,255,.05)",
        borderRadius: "15px 15px 0 0",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography sx={{textTransform: "uppercase", fontWeight: "800"}}>
        Upcoming {prayer}
      </Typography>

      <Stack
        direction="row"
        justifyContent={"center"}
        divider={
          <Box component={"span"} sx={{fontWeight: "900"}}>
            :
          </Box>
        }
        spacing={2}
        mt={2}
      >
        <Box>
          <Typography>05</Typography> Hours
        </Box>
        <Box>
          <Typography>13</Typography> Mins
        </Box>
        <Box>
          <Typography>55</Typography> Sec
        </Box>
      </Stack>
    </Box>
  );
};

export default CountdownTimer;
