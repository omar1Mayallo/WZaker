import {ListItem} from "@mui/material";

export type PrayerListItemProps = {prayer: string; time: string};
export const PrayerListItem: React.FC<PrayerListItemProps> = ({
  prayer,
  time,
}) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.5,
      }}
    >
      <span>{prayer}</span>
      <span>{time}</span>
    </ListItem>
  );
};

export default PrayerListItem;
