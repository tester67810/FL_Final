import React, { useState } from "react";
import "../Styles/ContactUs.css";

function ContactUs() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        "https://docs.google.com/forms/d/e/1FAIpQLSe2FFN6hMy76EUzKHLPgLpSBSi2vOtC7efKYbE2U4XC3KPsTw/formResponse",
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
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.2629402553885!2d-122.19797912361686!3d47.44943770074454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906d1369c0a50d%3A0xf99f91db9d9e4ba2!2s17658%20111th%20Ave%20SE%2C%20Renton%2C%20WA%2098055%2C%20USA!5e0!3m2!1sen!2sus!4v1720964567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="entry.7645755"
              placeholder="Enter your Full Name"
              required
            />

            <div className="form-row">
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  name="entry.1736458666"
                  placeholder="example@domain.com"
                  required
                  style={{ marginTop: "10px" }}
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="entry.1855476598"
                  placeholder="Required for Updates"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  style={{ marginTop: "10px" }}
                />
              </div>
            </div>

            {phoneError && (
              <p
                style={{
                  color: "white",
                  fontSize: "0.9rem",
                  marginTop: "4px",
                }}
              >
                {phoneError}
              </p>
            )}

            <label>Your Message</label>
            <textarea
              name="entry.2033202038"
              placeholder="Tell us how we can help..."
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              style={{ marginTop: "20px" }}
              disabled={phoneError !== "" || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
