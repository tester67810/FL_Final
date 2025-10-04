import React, { useState } from "react";
import "../Styles/ContactMapDocs.css";
import contactImg from "../Assets/map.png";

function ContactMapDocs() {
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (e) => {
    const phone = e.target.value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneError) return;

    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdDjJqRnhb-D6JeQomokkusnNCyBc-1GLeqY7W8QQRgdpXb0Q/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      alert("Your message has been submitted!");
      e.target.reset();
    } catch (err) {
      console.error("Submission error:", err);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-full-wrap">
      <div className="contact-wrapper1">
        <section className="contact-section1">
          <div className="contact-left1">
            <h1>Get in Contact</h1>
            <p><span>📞</span> +1-631.229.6314</p>
            {/* <p><span>📧</span> ivorystandardllc@gmail.com</p> */}
            <p><span>🌐</span> ivorystandardllc@gmail.com</p>
            <img src={contactImg} alt="Contact Visual" className="contact-image1" />
          </div>

          <form className="contact-form1" onSubmit={handleSubmit}>
            <div className="form-wrap1">
              <input
                type="text"
                name="entry.879204363"
                placeholder="Name"
                required
              />

              <div className="form-row1">
                <input
                  type="email"
                  name="entry.2106038684"
                  placeholder="Email"
                  required
                />

                <input
                  type="tel"
                  name="entry.1089746240"
                  placeholder="Cell phone"
                  pattern="[0-9]{10}"
                  onBlur={validatePhone}
                  required
                />
              </div>

              {phoneError && (
                <p style={{ color: "white", fontSize: "0.9rem" }}>{phoneError}</p>
              )}

              <textarea
                name="entry.276216902"
                placeholder="Message"
                rows="5"
                required
              ></textarea>

              <button type="submit" disabled={phoneError !== "" || isSubmitting}>
                {isSubmitting ? "Sending..." : "Complete & Send"}
              </button>
            </div>
          </form>
        </section>

        <div className="map-container1">
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
      </div>
    </div>
  );
}

export default ContactMapDocs;
