import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Quran from "./pages/Quran";
import Azkar from "./pages/Azkar";
import Hadith from "./pages/Hadith";
import NamesOfAllah from "./pages/NamesOfAllah";
import Prayers from "./pages/Prayers";
import Footer from "./shared/layout/Footer";
import Header from "./shared/layout/Header";
import {GeolocationProvider} from "./shared/context/Geolocation";

function App() {
  return (
    <>
      <GeolocationProvider>
        <Header />
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/azkar" element={<Azkar />} />
            <Route path="/hadith" element={<Hadith />} />
            <Route path="/names-of-allah" element={<NamesOfAllah />} />
            <Route path="/prayers" element={<Prayers />} />
          </Routes>
        </main>
        <Footer />
      </GeolocationProvider>
    </>
  );
}

export default App;
