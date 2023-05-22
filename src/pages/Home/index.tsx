import MainSection from "./Main.section";
import TheQuranSection from "./Quran.section";

export type HomeProps = {};
export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <MainSection />
      <TheQuranSection />
    </>
  );
};

export default Home;
