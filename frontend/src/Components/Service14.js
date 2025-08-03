import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/mold2.jpg";
import i2 from "../Assets/mold3.jpg";
import heroBg from "../Assets/mold1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service14() {
  const [activeIndex, setActiveIndex] = useState(null);
    const [phone, setPhone] = useState("");
            const [phoneError, setPhoneError] = useState("");
            const [isSubmitting, setIsSubmitting] = useState(false);
  

  const faqs = [
    {
      question: "How do I book a mold remediation service?",
      answer:
        "Mold remediation is a special service and cannot be booked online. Please call us to schedule a technician visit. After inspection, a custom quote will be shared via email or text."
    },
    {
      question: "Do technicians provide a quote during the inspection?",
      answer:
        "No. Our technicians only inspect the property. Quotations are prepared separately by our office and sent to you via email or text."
    },
    {
      question: "Is there a fixed price for mold remediation?",
      answer:
        "No. Pricing is case-to-case based depending on the severity and extent of mold. A detailed quote will be sent after inspection."
    },
    {
      question: "Who performs the remediation work?",
      answer:
        "Our certified mold remediation professionals handle the process using industry-standard techniques and equipment. All technicians are background-checked and trained."
    },
    {
      question: "Do I need to vacate the property during treatment?",
      answer:
        "This depends on the extent of the mold. We will advise you after inspection whether temporary relocation is necessary."
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
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay-content">
          <h1>Mold Remediation</h1>
          <h2>Professional & Thorough</h2>
          <p>
            Eliminate mold safely and effectively with Ivory Standard’s professional remediation service. Inspections are scheduled via phone only.
          </p>
          <a href="#quote">
            <button className="dark-btn">Request a Quote</button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Mold Remediation" />
          <div className="benefits-text">
            <h2 className="heading01">Comprehensive Mold Remediation</h2>
            <br />
            <p className="para01">
              Ivory Standard offers mold remediation services tailored to your unique situation. From initial inspection to final treatment, we use specialized equipment and protocols to ensure your home is safe and mold-free.
            </p>
            <br />
            <p className="para01">
              Book an inspection by phone. Our team will visit, assess the issue, and provide a detailed quote via email or text. Technicians do not provide on-site pricing.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Certified Mold Experts</div>
        <div>Thorough Inspections</div>
        <div>Custom Quotes</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Ivory for Mold Remediation?</h2>
            <br />
            <p className="para02">
              Our team follows strict protocols for mold removal, minimizing health risks and structural damage. With Ivory Standard, you get honest assessments, careful treatment, and long-term peace of mind.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Mold Remediation" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>Inspection Covers</h1>
        <p className="subheading">Every job is unique—here’s what we evaluate:</p>

        <ul className="roof-services-list">
          <li>Visible Mold Growth</li>
          <li>Moisture Levels & Water Intrusion</li>
          <li>Air Quality Indicators</li>
          <li>Extent of Structural Impact</li>
          <li>Possible Containment Needs</li>
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
        <h2>SCHEDULE YOUR INSPECTION</h2>
        <p>
          Mold remediation is a serious matter—let the professionals at Ivory Standard handle it the right way.
        </p>
        <div className="buttons">
          <a href="#quote">
            <button className="dark-btn">Request a Quote</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Service14;
