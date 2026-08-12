import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Outfits from "./pages/Outfits";
import Timeline from "./pages/Timeline";
import Weekend from "./pages/Weekend";
import Music from "./pages/weekend/Music";
import Rehearsal from "./pages/weekend/Rehearsal";
import WeddingDay from "./pages/weekend/WeddingDay";
import WeekendOverview from "./pages/weekend/WeekendOverview";
import Venue from "./pages/weekend/Venue";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/weekend" element={<Weekend />}>
          <Route index element={<WeekendOverview />} />
          <Route path="rehearsal" element={<Rehearsal />} />
          <Route path="wedding-day" element={<WeddingDay />} />
          <Route path="music" element={<Music />} />
          <Route path="venue" element={<Venue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;