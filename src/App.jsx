import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';

import Footer from './component/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />

        
        
      </Routes>

      <Footer/>

    </Router>
  );
};

export default App;
