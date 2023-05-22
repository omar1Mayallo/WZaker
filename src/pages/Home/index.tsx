import FivePillarsSection from "./FivePillars.section";
import MainSection from "./Main.section";
import WhoIsMuhammadSection from "./Muhamed.section";
import TheQuranSection from "./Quran.section";

export type HomeProps = {};
export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <MainSection />
      <TheQuranSection />
      <FivePillarsSection />
      <WhoIsMuhammadSection />
    </>
  );
};

export default Home;
