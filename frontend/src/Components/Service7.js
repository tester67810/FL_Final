import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/wash2.png";
import i2 from "../Assets/wash3.png";
import heroBg from "../Assets/wash1.webp";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service7() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your house washing is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers.",
    },
    {
      question: "Who performs the house washing?",
      answer:
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in soft wash house washing techniques for all exterior types.",
    },
    {
      question: "How much does house washing cost?",
      answer:
        "Pricing depends on the size of your home, exterior material, and level of buildup. Contact us anytime for a free, no-obligation quote.",
    },
    {
      question: "Do I need to be home during the wash?",
      answer:
        "No. As long as we have safe access to your exterior and an outdoor water source, you don’t need to be present.",
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window and a text notification when our crew is on the way.",
    },
    {
      question: "What’s included in house washing?",
      answer:
        "Our service includes a low-pressure soft wash to remove dirt, algae, mildew, and grime from siding, trim, soffits, and exterior surfaces without damaging paint or materials.",
    },
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
        "https://docs.google.com/forms/d/e/1FAIpQLSfHJ7tzqv4qFWHG5QvyKAlIf0IU1SPaxIVgEvXxW7t6sBMhvQ/formResponse",
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
          backgroundPosition: "center",
        }}
      >
        <div className="overlay-content">
          <h1>House Washing</h1>
          <h2>Safe & Effective Exterior Cleaning</h2>
          <p>
            Ivory Standard’s house washing restores your home’s exterior to its best.
            We safely remove dirt, mold, and grime with our proven soft wash methods —
            protecting paint and siding.
          </p>
          <a href="#quote"><button className="dark-btn">Request a Quote</button></a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="House Washing" />
          <div className="benefits-text">
            <h2 className="heading01">Our House Washing Service</h2>
            <p className="para01">
              Over time, your home’s exterior can collect mold, mildew, algae, and dirt.
              Our soft wash process gently lifts away buildup without high pressure that can damage siding.
            </p>
            <p className="para01">
              We use safe, eco-friendly solutions to clean vinyl, brick, stucco, and painted surfaces.
              The result? A refreshed, bright exterior that boosts curb appeal and extends the life of your home’s finish.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Low-Pressure Soft Wash</div>
        <div>Eco-Friendly Solutions</div>
        <div>Experienced & Insured Crew</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for House Washing?</h2>
            <p className="para02">
              Ivory Standard’s trusted professionals combine gentle techniques with attention to detail.
              We protect your siding and paint while delivering dramatic results that last —
              giving you peace of mind and a home that looks new again.
            </p>
          </div>
          <img src={i2} alt="About House Washing" />
        </div>
      </section>

      {/* Included Services */}
      <section className="roof-services-section">
        <h1>What’s Included in House Washing</h1>
        <p className="subheading">Gentle Exterior Renewal</p>
        <ul className="roof-services-list">
          <li>Low-Pressure Soft Wash</li>
          <li>Safe Mold & Mildew Removal</li>
          <li>Algae & Dirt Elimination</li>
          <li>Spot-Free Rinse</li>
          <li>Siding, Soffits, and Trim Care</li>
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
              <input type="text" placeholder="Name" name="entry.13342060" required />
              <input type="text" placeholder="Last Name" name="entry.1081741078" required />
            </div>
            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone"
                name="entry.1635705749"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <input type="email" placeholder="Email" name="entry.247003339" required />
            </div>
            {phoneError && (
              <p style={{ color: "white", fontSize: "0.9rem", marginTop: "4px" }}>{phoneError}</p>
            )}
            <div className="form-row">
              <input type="text" placeholder="Zip Code" name="entry.2100411222" required />
              <input type="text" placeholder="Square Footage" name="entry.248273012" />
            </div>
            <div className="form-row2">
              <input type="text" placeholder="Desired Services" name="entry.678365288" />
              <input type="text" placeholder="How did you hear about us?" name="entry.74233113" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Agree to terms and updates</label>
            </div>
            <button
              type="submit"
              className="green-btn1"
              disabled={phoneError || isSubmitting}
            >
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
                <span className="faq-arrow">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
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
          backgroundPosition: "center",
        }}
      >
        <h2>LET'S DO IT!</h2>
        <p>
          Book your house washing with Ivory Standard — restore your home’s curb appeal today!
        </p>
        <div className="buttons">
          <a href="#quote"><button className="dark-btn">Request a Quote</button></a>
        </div>
      </section>
    </div>
  );
}

export default Service7;
