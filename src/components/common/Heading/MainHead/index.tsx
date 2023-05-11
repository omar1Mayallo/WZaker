import {Typography} from "@mui/material";

export type MainHeadProps = {head: string};
export const MainHead: React.FC<MainHeadProps> = ({head}) => {
  return <Typography>{head}</Typography>;
};

export default MainHead;
