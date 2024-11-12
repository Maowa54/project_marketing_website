import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Index from './pages/Index';

import Footer from './component/Footer';
import Pricing from './pages/Pricing';


const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />


        
        
      </Routes>

      <Footer/>

    </Router>
  );
};

export default App;
