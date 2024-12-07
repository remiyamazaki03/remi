import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home";
import About from "./pages/About";
import Voicecoach from "./pages/Voicecoach";
import Webdeveloper from "./pages/Webdeveloper";
import Blank from "./pages/Blank";
import Disclosure from "./pages/Disclosure";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <HelmetProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/voicecoach" element={<Voicecoach />} />
          <Route path="/webdeveloper" element={<Webdeveloper />} />
          <Route path="/contact" element={<Blank />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}
