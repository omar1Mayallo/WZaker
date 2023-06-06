import {ListItem} from "@mui/material";

export type PrayerListItemProps = {
  prayerName: string;
  prayerTime: string;
  active?: boolean;
};

const PrayerListItem: React.FC<PrayerListItemProps> = ({
  prayerName,
  prayerTime,
  active = false,
}) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.5,
        px: 4,
        color: active ? "white" : "rgba(255,255,255,.5)",
      }}
    >
      <span>{prayerName}</span>
      <span>{prayerTime.split(" ")[0].trim()}</span>
    </ListItem>
  );
};

export default PrayerListItem;
