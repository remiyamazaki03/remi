import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Performance from "./pages/Performance";
import Voicecoach from "./pages/Voicecoach";
import Webdeveloper from "./pages/Webdeveloper";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performance" element={<Performance />} />{" "}
        <Route path="/voicecoach" element={<Voicecoach />} />{" "}
        <Route path="/webdeveloper" element={<Webdeveloper />} />
      </Routes>
    </div>
  );
}
