import React from "react";
import { useLocation } from "react-router-dom";
import BookAppointment from "../Components/BookAppointment";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function AboutPage() {


  return (
    <div>
        <Navbar/>
    <BookAppointment/>
    <Footer/>
    </div>
  );
}

export default AboutPage;


