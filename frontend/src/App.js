import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import ContactMap from "./Pages/ContactMap";
import Booking from "./Pages/Booking";
import Service1Page from "./Pages/Service1Page";
import Service2Page from "./Pages/Service2Page";
import Service3Page from "./Pages/Service3Page";
import Service4Page from "./Pages/Service4Page";
import Service5Page from "./Pages/Service5Page";
import Service6Page from "./Pages/Service6Page";
import Service7Page from "./Pages/Service7Page";
import Service8Page from "./Pages/Service8Page";
import Service9Page from "./Pages/Service9Page";
import Service10Page from "./Pages/Service10Page";
import Service11Page from "./Pages/Service11Page";
import Service12Page from "./Pages/Service12Page";
import Service13Page from "./Pages/Service13Page";
import Service14Page from "./Pages/Service14Page";
import Blogs from "./Components/Blogs"
import ScrollUpButton from "./Components/ScrollUpButton";
import ScrollToTop from "./Components/ScrollToTop"; 
import Booking2 from "./Pages/Booking2";
import Booking3 from "./Pages/Booking3";
import Booking4 from "./Pages/Booking4";
import SinglePost from "./Components/SinglePost"
import SuccessPage from "./Pages/SuccessPage";
import CancelPage from "./Pages/CancelPage";
import BlogP1 from "./Pages/BlogP1";
import BlogP2 from "./Pages/BlogP2";
import BlogP3 from "./Pages/BlogP3";
import BlogP4 from "./Pages/BlogP4";
import BlogP5 from "./Pages/BlogP5";
import BlogP6 from "./Pages/BlogP6";
import AboutPage from "./Pages/AboutPage";
import FaqPage from "./Pages/FaqPage";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<ContactMap />} />
          <Route path="/regular-cleaning" element={<Service1Page />} />
          <Route path="/move-out-and-move-in" element={<Service2Page />} />
          <Route path="/deep-cleaning" element={<Service3Page />} />
          <Route path="/post-construction" element={<Service4Page />} />
          <Route path="/roof-cleaning" element={<Service5Page />} />
          <Route path="/gutter-cleaning" element={<Service6Page />} />
          <Route path="/house-washing" element={<Service7Page />} />
          <Route path="/pressure-washing" element={<Service8Page />} />
          <Route path="/carpet-and-upholstery" element={<Service9Page />} />
          <Route path="/construction" element={<Service10Page />} />
          <Route path="/corporate-office" element={<Service11Page />} />
          <Route path="/retail-space" element={<Service12Page />} />
          <Route path="/vrbo-and-airbnb" element={<Service13Page />} />
          <Route path="/mold-remediation" element={<Service14Page />} />
          <Route path="/blog/:id" element={<SinglePost />} />
          <Route path="/house_cleaning" element={<Booking />} />
          <Route path="/exterior_cleaning" element={<Booking2 />} />
          <Route path="/carpet_cleaning" element={<Booking3 />} />
          <Route path="/commercial_cleaning" element={<Booking4 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/success" element={<SuccessPage/>} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/blog1" element={<BlogP1 />} />
          <Route path="/blog2" element={<BlogP2 />} />
          <Route path="/blog3" element={<BlogP3 />} />
          <Route path="/blog4" element={<BlogP4 />} />
          <Route path="/blog5" element={<BlogP5 />} />
          <Route path="/blog6" element={<BlogP6 />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/faqs" element={<FaqPage/>} />
        </Routes>
        <ScrollUpButton />
      </Router>
    </div>
  );
}

export default App;


