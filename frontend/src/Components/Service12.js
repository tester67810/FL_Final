import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/retail1.jpg";
import i2 from "../Assets/retail2.png";
import heroBg from "../Assets/retail0.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service12() {
  const [activeIndex, setActiveIndex] = useState(null);
       const [phone, setPhone] = useState("");
        const [phoneError, setPhoneError] = useState("");
        const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe or monthly invoicing for retail clients. A payment method must be on file."
    },
    {
      question: "Who performs the retail cleaning?",
      answer:
        "Our trained, background-checked team members specialize in discreet, thorough cleaning for retail shops and showrooms."
    },
    {
      question: "How much does retail cleaning cost?",
      answer:
        "Pricing depends on square footage, store layout, and frequency of cleaning. Contact us for a custom quote."
    },
    {
      question: "Do I need to be present during cleaning?",
      answer:
        "No. Most retail stores provide secure access so we can clean after business hours with zero disruption to shoppers."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "We work around your business hours — typically evenings or early mornings. Arrival windows are confirmed in advance."
    },
    {
      question: "What’s included in retail cleaning?",
      answer:
        "Our service includes floor care, glass cleaning, dusting, restroom maintenance, trash removal, and sanitizing high-traffic areas to keep your store inviting."
    }
  ];

 const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(value)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneError) return;

    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdJt5bsPhh4IRkFlCMZV3VuTSbK4ADFyZqscHa65ZRwZmPhJw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      alert("Your message has been submitted! ✅");
      e.target.reset();
      setPhone("");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cleaning-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay-content">
          <h1>Retail Spaces Cleaning</h1>
          <h2>Spotless & Shopper-Ready</h2>
          <p>
            Keep your retail store sparkling clean, welcoming, and safe for every customer. Ivory Standard’s professional retail cleaning keeps your shop ready for business every day.
          </p>
    <a href="#quote"><button className="dark-btn">Request a Quote</button></a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Retail Spaces Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Retail Cleaning Service</h2>
            <br />
            <p className="para01">
              We understand presentation is everything in retail. Our team pays attention to details that matter — sparkling floors, clean shelves, smudge-free windows, and sanitized high-touch surfaces.
            </p>
            <br />
            <p className="para01">
              Ivory Standard works before or after store hours, using eco-friendly products and efficient techniques to ensure your shop always looks its best for your customers.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Discreet & Professional</div>
        <div>Flexible Scheduling</div>
        <div>Retail Presentation Experts</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Retail Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard delivers the polished first impression your customers expect. Our trained, insured team helps you maintain a spotless, inviting retail environment that supports sales and protects your brand.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Retail Spaces Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Retail Cleaning</h1>
        <p className="subheading">Professional & Consistent</p>

        <ul className="roof-services-list">
          <li>Floor Sweeping, Mopping & Vacuuming</li>
          <li>Dusting Shelves & Fixtures</li>
          <li>Glass & Window Spot Cleaning</li>
          <li>Restroom Maintenance</li>
          <li>Trash & Recycling Disposal</li>
        </ul>
      </section>

      {/* Quote Section */}
      <section
                 id="quote"
              className="quote-section"
              style={{
                backgroundImage: `url(${quoteBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="quote-overlay"></div>
              <div className="quote-form">
                <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Name" name="entry.1009275927" required />
              <input type="text" placeholder="Last Name" name="entry.1818453183" required />
            </div>
            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone"
                name="entry.518933839"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <input type="email" placeholder="Email" name="entry.1421178179" required />
            </div>
            {phoneError && (
              <p style={{ color: "white", fontSize: "0.9rem", marginTop: "4px" }}>{phoneError}</p>
            )}
            <div className="form-row">
              <input type="text" placeholder="Zip Code" name="entry.1407045223" required />
              <input type="text" placeholder="Square Footage" name="entry.1247129266" />
            </div>
            <div className="form-row2">
              <input type="text" placeholder="Desired Services" name="entry.1509664965" />
              <input type="text" placeholder="How did you hear about us?" name="entry.1104108847" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Agree to terms and updates</label>
            </div>
            <button type="submit" className="green-btn1" disabled={phoneError || isSubmitting}>
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
              </div>
            </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
        
          <h2>Common Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-arrow">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="final-cta"
        style={{
          backgroundImage: `url(${finalCtaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2>LET'S DO IT!</h2>
        <p>Book your retail cleaning today with Ivory Standard — your store deserves to shine every day.</p>
        <div className="buttons">
           <a href="#quote">
            <button className="dark-btn">Request a Quote</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Service12;
