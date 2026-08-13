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
import ScrollToTop from "./components/ScrollToTop";
import OutfitAssignments from "./pages/outfits/OutfitAssignments";
import SelectedOutfits from "./pages/outfits/SelectedOutfits";
import OutfitsOverview from "./pages/outfits/OutfitsOverview";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outfits" element={<Outfits />} >
          <Route index element={<OutfitsOverview />} />
          <Route path="assignments" element={<OutfitAssignments />} />
          <Route path="selected" element={<SelectedOutfits />} />
        </Route>
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