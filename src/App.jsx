import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Index from './pages/Index';

import Footer from './component/Footer';
import Pricing from './pages/Pricing';
import Service1 from './pages/Service1';
import AllServices from './pages/AllServices';


const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/allservices" element={<AllServices/>} />

        <Route path="/service1" element={<Service1 />} />



        
        
      </Routes>

      <Footer/>

    </Router>
  );
};

export default App;
