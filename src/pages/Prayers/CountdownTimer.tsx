import {Box, Typography, Stack} from "@mui/material";

type CountdownTimerProps = {prayer: string; countdown: string};
const CountdownTimer: React.FC<CountdownTimerProps> = ({prayer, countdown}) => {
  return (
    <Box
      sx={{
        bgcolor: "#161a2c",
        borderRadius: "15px 15px 0 0",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography sx={{textTransform: "uppercase", fontWeight: "800"}}>
        Upcoming{" "}
        <Box component={"span"} sx={{color: "#0099ff"}}>
          {prayer}
        </Box>
      </Typography>

      <Stack direction="column" justifyContent={"center"} mt={1}>
        <Box>{countdown}</Box>
        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={1}
          divider={
            <Box component={"span"} sx={{fontWeight: "900"}}>
              :
            </Box>
          }
        >
          <Box>
            <Typography>Hours</Typography>
          </Box>
          <Box>
            <Typography>Mins</Typography>
          </Box>
          <Box>
            <Typography>Sec</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CountdownTimer;
