//________________________IMPORTS________________________//
import {Typography, Box} from "@mui/material";

//________________________TYPES________________________//
type MainHeadProps = {head: string; color?: string};

//________________________COMPONENTS________________________//
export const MainHead: React.FC<MainHeadProps> = ({head, color}) => {
  return (
    <Typography variant="h3" sx={{textAlign: "center", mb: 5}}>
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          minWidth: "200px",
          fontFamily: "Poppins",
          fontSize: "calc(33px + 0.4vw)",
          fontWeight: "400",
          color: color ? color : "black",
        }}
      >
        {head}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 456.99 38"
          style={{display: "block"}}
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                style={{fill: "#cb0a34"}}
                d="M456.28,8.29a4.6,4.6,0,0,0,.29-.59c0-.11.08-.21.11-.31a4.56,4.56,0,0,0,.21-.72l0-.21A6.11,6.11,0,0,0,457,5.6h0a5.5,5.5,0,1,0-9.24,4C422.6,9.89,288,9.52,281.13,9.52h-31c-7.86,0-15.13,2.18-21.14,7.26a30.14,30.14,0,0,0-8.72-5.25c-4.68-1.82-9.42-2-14.32-2H9.24A5.5,5.5,0,1,0,0,5.5v0c0,.05,0,.09,0,.14a3.4,3.4,0,0,0,0,.45c0,.12,0,.23,0,.35l.06.3A1.82,1.82,0,0,0,.22,7,5.48,5.48,0,0,0,4.5,10.9a5.13,5.13,0,0,0,1.12.16c.85,0,1.7,0,2.54,0H209.44a28.85,28.85,0,0,1,19,7.26,28.31,28.31,0,0,0-6.38,9.13L229,38.29,236,27.45h0a28.11,28.11,0,0,0-6.38-9.12A28.8,28.8,0,0,1,241.09,12c4-1.09,8-1,12.14-1H451l.54,0a5.47,5.47,0,0,0,3.21-1l.07,0s0,0,.05-.05a4.53,4.53,0,0,0,.62-.54l.24-.26a6.41,6.41,0,0,0,.39-.52C456.15,8.52,456.21,8.4,456.28,8.29Z"
              ></path>
            </g>
          </g>
        </svg>
      </Box>
    </Typography>
  );
};

export default MainHead;
