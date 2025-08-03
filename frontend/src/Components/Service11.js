import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/office3.webp";
import i2 from "../Assets/office2.png";
import heroBg from "../Assets/office1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service11() {
  const [activeIndex, setActiveIndex] = useState(null);
     const [phone, setPhone] = useState("");
      const [phoneError, setPhoneError] = useState("");
      const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe or invoicing for corporate clients. A payment method must be on file. We do not accept checks or wire transfers without prior arrangement."
    },
    {
      question: "Who performs the office cleaning?",
      answer:
        "Our trained, background-checked team members at Ivory Standard specialize in thorough and discreet corporate office cleaning during or after business hours."
    },
    {
      question: "How much does office cleaning cost?",
      answer:
        "Pricing depends on office size, layout, cleaning frequency, and any custom requirements. Contact us for a tailored quote and plan."
    },
    {
      question: "Do I need to be present during the cleaning?",
      answer:
        "No. Most corporate clients provide secure access so our crew can clean outside of business hours for minimal disruption."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "We work around your schedule — before, during, or after hours. Arrival times are agreed upon during setup and confirmed in advance."
    },
    {
      question: "What’s included in corporate office cleaning?",
      answer:
        "We handle dusting, surface disinfection, trash removal, restrooms, break rooms, floors, glass, and more — ensuring your workspace stays fresh and healthy."
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
          <h1>Corporate Office Cleaning</h1>
          <h2>Professional & Reliable</h2>
          <p>
            Keep your workplace spotless and inviting with Ivory Standard’s professional corporate office cleaning — customized to fit your team’s needs and schedule.
          </p>
         <a href="#quote"><button className="dark-btn">Request a Quote</button></a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Corporate Office Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Corporate Office Cleaning</h2>
            <br />
            <p className="para01">
              We help maintain a healthy, productive work environment with consistent, detail-oriented cleaning. From open workspaces and conference rooms to restrooms and break areas — every corner gets our full attention.
            </p>
            <br />
            <p className="para01">
              Ivory Standard’s team works around your office hours, using safe, eco-friendly products and proven systems to deliver a clean your staff and clients can trust.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Flexible Scheduling</div>
        <div>Background-Checked Staff</div>
        <div>Trusted by Businesses</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Office Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard combines reliable staff, quality products, and flexible plans to keep your office looking professional day after day. We build lasting relationships with our corporate clients by delivering consistent results.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Corporate Office Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Office Cleaning</h1>
        <p className="subheading">Healthy & Professional Spaces</p>

        <ul className="roof-services-list">
          <li>Desk & Workspace Dusting</li>
          <li>Trash & Recycling Removal</li>
          <li>Restroom Sanitation</li>
          <li>Break Room Cleaning</li>
          <li>Floor Care & Vacuuming</li>
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
        <p>Book your corporate office cleaning with Ivory Standard — and keep your workspace fresh and inspiring.</p>
        <div className="buttons">
         <a href="#quote">
            <button className="dark-btn">Request a Quote</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Service11;
