import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Outfits from "./pages/Outfits";
import Timeline from "./pages/Timeline";
import Weekend from "./pages/Weekend";
import Music from "./pages/Music";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/weekend" element={<Weekend />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;