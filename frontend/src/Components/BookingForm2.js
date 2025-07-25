import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/BookingForm2.css";
import { supabase } from "../supabaseClient";
import mossIcon from "../Assets/House-cleaning1.jpg";

function BookingForm2() {
  const [service, setService] = useState("Select Option");
  const [frequency, setFrequency] = useState("Select Option");
  const [tip, setTip] = useState("");
  const [parking, setParking] = useState("");
  const [keyInfo, setKeyInfo] = useState("");
  const [notes, setNotes] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    { text: "Fantastic service, spotless clean!", author: "Emily R.", stars: 5 },
    { text: "They did a great job with my office.", author: "Michael S.", stars: 4 },
    { text: "Very professional and thorough.", author: "Sophia W.", stars: 3 },
    { text: "Quick, efficient, and friendly!", author: "Daniel T.", stars: 4 },
    { text: "Best cleaning company I've used.", author: "Olivia P.", stars: 5 },
    { text: "Affordable and reliable.", author: "James L.", stars: 4 },
    { text: "My house has never looked better.", author: "Ava K.", stars: 5 },
    { text: "Highly recommended!", author: "Benjamin C.", stars: 5 },
    { text: "On time and very detailed work.", author: "Mia G.", stars: 4 },
    { text: "Exceeded my expectations!", author: "William B.", stars: 3 },
    { text: "Friendly staff and great results.", author: "Charlotte M.", stars: 4 },
    { text: "Will book again for sure.", author: "Lucas H.", stars: 5 },
    { text: "Very pleased with the service.", author: "Amelia Z.", stars: 4 },
    { text: "My carpets look brand new!", author: "Henry J.", stars: 3 },
    { text: "Excellent customer support too.", author: "Isabella F.", stars: 5 },
  ];

  const faqs = [
    { question: "How to schedule online?", answer: "Use our booking form, choose your service, date, and pay securely online." },
    { question: "When will I get a confirmation?", answer: "You’ll receive an email and SMS confirmation immediately after booking." },
    { question: "Do you have a phone number?", answer: "Yes, you can reach us anytime at (123) 456-7890." },
    { question: "How do I select a date and time?", answer: "Select your preferred date from the calendar and choose a time slot." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const renderStars = (count) => "⭐".repeat(count);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getFrequencyCost = () => {
    switch (frequency) {
      case "Every 3 Months":
        return 10;
      case "Every 6 Months":
        return 20;
      case "One-Time":
        return 30;
      default:
        return 0;
    }
  };

  const getServiceCost = () => {
    switch (service) {
      case "Roof Cleaning":
        return 10;
      case "Gutter Cleaning":
        return 20;
      case "House Washing":
        return 30;
      case "Pressure Washing":
        return 40;
      default:
        return 0;
    }
  };

  const calculateTotal = () => {
    const base = 40;
    return base + getFrequencyCost() + getServiceCost();
  };

  const handleSubmit = async () => {
    // ✅ Required field checks
    if (service === "Select Option" || service === "") {
      alert("Please select a service.");
      return;
    }

    if (frequency === "Select Option" || frequency === "") {
      alert("Please select a frequency.");
      return;
    }

    if (!firstName.trim()) {
      alert("Please enter your first name.");
      return;
    }

    if (!lastName.trim()) {
      alert("Please enter your last name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }

    // ✅ If all good, submit
    const { data, error } = await supabase.from("bookings1").insert([
      {
        service: service,
        frequency: frequency,
        tip: tip,
        parking_fee: parking,
        instructions: { keyInfo: keyInfo },
        notes: notes,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        address: address,
        amount: calculateTotal(),
        payment_status: "pending",
      },
    ]).select();

    if (error) {
      console.error("Error saving booking:", error);
      alert("Booking failed: " + error.message);
      return;
    }

    const bookingId = data[0].id;

    try {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: calculateTotal() * 100,
          bookingId,
          email: email,
        }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        alert("Failed to redirect to payment.");
      }
    } catch (err) {
      console.error("Stripe redirect error:", err);
      alert("Payment error occurred.");
    }
  };

  return (
    <div className="booking-layout2">
      <div className="booking-form2">
        {/* Service */}
        <div className="form-group2">
          <label className="section-title2">Services</label>
          <select
            style={{ marginTop: 15 }}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option>Roof Cleaning</option>
            <option>Gutter Cleaning</option>
            <option>House Washing</option>
            <option>Pressure Washing</option>
          </select>
        </div>

        {/* Frequency */}
        <div className="form-group2">
          <label className="section-title2">Frequency</label>
          <div className="button-group2" style={{ marginTop: 15 }}>
            {["Every 3 Months", "Every 6 Months", "One-Time"].map((item) => (
              <button
                key={item}
                className={`button-group-button2 ${frequency === item ? "button-selected2" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFrequency(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="form-group2">
          <h3 style={{ color: "#555" }}>Tips & Parking</h3>
          <p style={{ marginTop: 20, marginBottom: 20, color: "#333" }}>
            Tips and parking are 100% optional-If you live in areas where parking is hard to find, a parking tip is often helpful and 100% of it goes to the provider to grab closest parking near you including expensive garage parking.
          </p>
          <label className="section-title2">Tips (Optional)</label>
          <div className="button-group2" style={{ marginTop: 15 }}>
            {["0%", "10%", "15%", "20%", "Other"].map((item) => (
              <button
                key={item}
                className={`button-group-button2 ${tip === item ? "button-selected2" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setTip(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Parking */}
        <div className="form-group2">
          <label className="section-title2">Parking (Optional)</label>
          <div className="button-group2" style={{ marginTop: 15 }}>
            {["$0", "$5", "$10", "$20", "Other"].map((item) => (
              <button
                key={item}
                className={`button-group-button2 ${parking === item ? "button-selected2" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setParking(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Details */}
        <div className="form-group2">
          <label className="section-title2">Customer Details</label>
          <div className="area-row2" style={{ marginTop: 15 }}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <div className="area-row2">
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>

        {/* Key Info */}
        <div className="form-group2">
          <label className="section-title2">Key Information & Job Notes</label>
          <div className="button-group3" style={{ marginTop: 15 }}>
            {[
              "Someone Will Be At Home",
              "I Will Hide The Keys",
              "I will Leave the Key (Leave the Instructions on the Notes)",
              "I will provide an Access Code (Leave the Code on the Notes)",
              "Other (Leave the Instruction on the Notes)",
            ].map((item) => (
              <button key={item} className={keyInfo === item ? "selected3" : ""} onClick={() => setKeyInfo(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="form-group2">
          <label className="section-title2">Special Notes Or Instructions</label>
          <textarea
            className="note-textarea2"
            placeholder="Special Notes Or Instructions"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <button className="submit-button2" onClick={handleSubmit}>Confirm & Pay</button>
      </div>

      <div className="sidebar2">
        <div className="sidebar-card2">
          <h3>Summary Section</h3>
          <li><strong>Industry:</strong> Exterior Cleaning</li>
          <li><strong>Service:</strong> {service} </li>
          <li><strong>Frequency:</strong> {frequency} </li>
          <li><strong>Total:</strong> <span style={{ color: "red" }}>${calculateTotal()}</span></li>
        </div>

        <div className="sidebar-card2">
          <h3>Customer Reviews</h3>
          <p>{reviews[currentReview].text}</p>
          <p>~ {reviews[currentReview].author}</p>
          <p>{renderStars(reviews[currentReview].stars)}</p>
          <button onClick={nextReview} className="next-review2">Next ➜</button>
        </div>

        <div className="sidebar-card2">
          <h3>Popular Questions</h3>
          <ul>
            {faqs.map((faq, index) => (
              <li
                key={index}
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              >
                ➤ {faq.question}
                {openFAQ === index && (
                  <p style={{ marginTop: "5px", background: "#f5f5f5", padding: "8px", borderRadius: "6px" }}>
                    {faq.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookingForm2;
