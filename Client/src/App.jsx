// App.jsx
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import PageTransition from "./components/PageTransition";

const transitions = ["slide-left", "slide-top", "zoom"];

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetRoute, setTargetRoute] = useState(null);
  const [transitionType, setTransitionType] = useState("slide-left");

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (path) => {
    if (path !== location.pathname) {
      const nextStyle =
        transitions[Math.floor(Math.random() * transitions.length)];
      setTransitionType(nextStyle);
      setTargetRoute(path);
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (isTransitioning && targetRoute) {
      const timer = setTimeout(() => {
        navigate(targetRoute);
        setIsTransitioning(false);
        setTargetRoute(null);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, targetRoute, navigate]);

  return (
    <div className="bg-black font-querencia text-white min-h-screen font-sans overflow-x-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      <PageTransition
        isVisible={isTransitioning}
        type={transitionType}
        onComplete={() => {}}
      />

      <Navbar onNavigate={handlePageChange} />
      <div className="pb-10" />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
