import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Voicecoach from "./pages/Voicecoach";
import Videocourse from "./pages/Videocourse";
import Webdeveloper from "./pages/Webdeveloper";
import Blank from "./pages/Blank";
import Disclosure from "./pages/Disclosure";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/voicecoach" element={<Voicecoach />} />
        <Route path="/agfkev" element={<Videocourse />} />
        <Route path="/webdeveloper" element={<Webdeveloper />} />
        <Route path="/contact" element={<Blank />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </div>
  );
}
