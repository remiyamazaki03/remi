import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Voicecoach from "./pages/Voicecoach";
import Webdeveloper from "./pages/Webdeveloper";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/voicecoach" element={<Voicecoach />} />{" "}
        <Route path="/webdeveloper" element={<Webdeveloper />} />
      </Routes>
    </div>
  );
}
