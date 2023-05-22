import MaznaImage from "../../../assets/Images/mezana.png";
import {Box} from "@mui/material";

export type PillarItemProps = {
  icon: string;
  PillarEnName: string;
  PillarArName: string;
  idx: number;
};
export const PillarItem: React.FC<PillarItemProps> = ({
  icon,
  PillarEnName,
  PillarArName,
  idx,
}) => {
  return (
    <Box className="pillar_item">
      <Box
        className="Me2zna"
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: {
            md:
              idx === 0 || idx === 4
                ? "180px"
                : idx === 1 || idx === 3
                ? "90px"
                : "20px",
          },

          "&:before": {
            content: '""',
            backgroundImage: `url(${MaznaImage})`,
            backgroundSize: "cover",
            width: "100px",
            height: "100px",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            mx: "auto",
          },
        }}
      >
        <img src={icon} alt="Pillar-img" loading="lazy" />
      </Box>
      <Box>
        <p>{PillarEnName}</p>
        <p>{`(${PillarArName})`}</p>
      </Box>
    </Box>
  );
};

export default PillarItem;
