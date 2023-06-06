import QuranImage from "../../../../assets/quran-read.webp";
import ImgTxtSection from "../../../../shared/components/ImgTxtSection";
import {QuranText1, QuranText2, QuranText3} from "../../../../data/texts";

const TheQuranSection = () => {
  return (
    <ImgTxtSection
      secHead="The Quran"
      par1={QuranText1}
      par2={QuranText2}
      par3={QuranText3}
      imgUrl={QuranImage}
    />
  );
};

export default TheQuranSection;
