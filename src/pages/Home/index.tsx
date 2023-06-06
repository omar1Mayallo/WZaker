import FivePillarsSection from "./sections/FivePillars";
import MainSection from "./sections/Main";
import QuranSection from "./sections/Quran";
import WhoMuhammedSection from "./sections/WhoMuhammed";

const Home: React.FC = () => {
  return (
    <>
      <MainSection />
      <QuranSection />
      <FivePillarsSection />
      <WhoMuhammedSection />
    </>
  );
};

export default Home;
