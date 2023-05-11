import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Azkar from "./pages/Azkar";
import Hadith from "./pages/Hadith";
import NamesOfAllah from "./pages/NamesOfAllah";
import Prayers from "./pages/Prayers";
import {Route, Routes} from "react-router-dom";
import Quran from "./pages/Quran";

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/azkar" element={<Azkar />} />
          <Route path="/hadith" element={<Hadith />} />
          <Route path="/Names-of-allah" element={<NamesOfAllah />} />
          <Route path="/prayers-timer" element={<Prayers />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
