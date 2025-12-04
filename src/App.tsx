import Headersection from "./components/view/header";
import Partenaire from "./components/view/partenaire";
import PremierSection from "./components/view/premier-section";
import DeuxiemeSection from "./components/view/deuxieme-section";
import TroisiemeSection from "./components/view/troisieme-section" ;
import FooterSection from "./components/view/footer";
// import QuatriemeSection from "./components/view/quatrieme-section";
import CinquiemeSection from "./components/view/cinquieme-section";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import ServicePage from "./pages/service/service"
import DetailServices from "./pages/service/detail";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/sign_up";
import Pagedashboard from "./pages/dashboard/dashboard";

  
function App() {
  return (
    <BrowserRouter>
        <Headersection/>
        <Partenaire/>
        <PremierSection/>
        <DeuxiemeSection/>
        <TroisiemeSection/>
        {/* <QuatriemeSection/> */}
        <CinquiemeSection/>
        <FooterSection/>
              {/* Navigation */}
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About </Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
       
             <Routes>
        <Route path="/services/:service" element={<DetailServices />} />
          </Routes>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
      </Routes>  

      <Routes>
        <Route path="/dashboard" element={<Pagedashboard/>} />

      </Routes>  
      

    </BrowserRouter>
    
  )
}



export default App;
