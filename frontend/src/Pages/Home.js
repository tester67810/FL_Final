import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";
import Services from "../Components/Services";
import ContactUs from "../Components/ContactUs";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />

      {/* Optional: Info Section */}
      {/* <Info /> */}

      {/* Optional: About Section */}
      {/* <About /> */}
 <section id="about">  <BookAppointment /></section>
    
      <Services />
      <Reviews />

      {/* Optional: Doctors Section */}
      {/* <Doctors /> */}

      {/* Add id for hash scroll target */}
      <section id="faq">
        <Faq />
      </section>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
