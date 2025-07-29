import React from "react";
import { useLocation } from "react-router-dom";
import Faq from "../Components/Faq";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function FaqPage() {


  return (
    <div>
     <Navbar/>
    <Faq/>
    <Footer/>
    </div>
  );
}

export default FaqPage;
