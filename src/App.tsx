
// import QuatriemeSection from "./components/view/quatrieme-section";
// import CinquiemeSection from "./components/view/cinquieme-section";

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import ServicePage from "./pages/service/service"
import DetailServices from "./pages/service/detail";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/sign_up";
import Pagedashboard from "./pages/dashboard/dashboard";
import Header from "./components/view/header";

  
function App() {
  return (
    <BrowserRouter>
       
        {/* <QuatriemeSection/>
        <CinquiemeSection/> */}
       
  
      <Header/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about Us" element={<AboutPage />} />
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
