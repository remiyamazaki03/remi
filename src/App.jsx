import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./pages/About"));
const Voicecoach = lazy(() => import("./pages/Voicecoach"));
const Webdeveloper = lazy(() => import("./pages/Webdeveloper"));
const Blank = lazy(() => import("./pages/Blank"));
const Disclosure = lazy(() => import("./pages/Disclosure"));
const Policies = lazy(() => import("./pages/Policies"));

export default function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/voicecoach" element={<Voicecoach />} />
          <Route path="/webdeveloper" element={<Webdeveloper />} />
          <Route path="/contact" element={<Blank />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </Suspense>
    </div>
  );
}
