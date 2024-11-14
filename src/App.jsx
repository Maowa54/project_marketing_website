import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./component/Header";
import Index from "./pages/Index";
import Footer from "./component/Footer";
import Pricing from "./pages/Pricing";
import Service1 from "./pages/Service1";
import AllServices from "./pages/AllServices";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";

// Scroll to top component to ensure page scrolls to top on route change
const ScrollToTop = () => {
  const location = useLocation(); // Get current location (path)
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location]); // Trigger effect when location changes
  
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/allservices" element={<AllServices />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/service4" element={<Service4 />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
