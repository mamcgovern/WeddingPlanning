import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Outfits from "./pages/Outfits";
import Timeline from "./pages/Timeline";
import Weekend from "./pages/Weekend";

function App() {
  return (
    <BrowserRouter>
      <Header />

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