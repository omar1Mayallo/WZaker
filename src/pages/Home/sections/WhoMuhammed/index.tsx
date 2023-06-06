import MuhammadImage from "../../../../assets/mohamed.webp";
import ImgTxtSection from "../../../../shared/components/ImgTxtSection";
import {MuhamedText1, MuhamedText2, MuhamedText3} from "../../../../data/texts";

const WhoIsMuhammadSection = () => {
  return (
    <ImgTxtSection
      secHead="Who is Prophet Muhammad (ﷺ)?"
      par1={MuhamedText1}
      par2={MuhamedText2}
      par3={MuhamedText3}
      imgUrl={MuhammadImage}
    />
  );
};

export default WhoIsMuhammadSection;
