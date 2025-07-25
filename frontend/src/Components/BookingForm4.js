import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/BookingForm4.css";
import { supabase } from "../supabaseClient";

function BookingForm4() {
  const subServices = [
    "Construction Final Clean",
    "Corporate Office Cleaning",
    "Retail Spaces Cleaning",
    "VRBO and AIRBNB Cleaning",
  ];

  const frequencyOptions = {
    "Construction Final Clean": ["One-Time"],
    "Corporate Office Cleaning": ["Single Deep Cleaning", "Recurring"],
    "Retail Spaces Cleaning": ["Single Deep Cleaning", "Recurring"],
    "VRBO and AIRBNB Cleaning": ["Single Deep Cleaning", "Recurring"],
  };

  const [formState, setFormState] = useState({
    location: "Snohomish County",
    subService: "",
    frequency: "",
    date: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const getSubServiceCost = () => {
    switch (formState.subService) {
      case "Construction Final Clean":
        return 10;
      case "Corporate Office Cleaning":
        return 20;
      case "Retail Spaces Cleaning":
        return 30;
      case "VRBO and AIRBNB Cleaning":
        return 40;
      default:
        return 0;
    }
  };

  const getServiceCost = () => {
    return getSubServiceCost() + 40;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "subService",
      "frequency",
      "date",
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
    ];

    for (const field of requiredFields) {
      if (!formState[field] || formState[field].toString().trim() === "") {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const { firstName, lastName, subService, ...rest } = formState;

    const formData = {
      ...rest,
      first_name: firstName,
      last_name: lastName,
      service: subService,
      payment_status: "pending",
    };

    const { data, error } = await supabase
      .from("bookings1")
      .insert([formData])
      .select();

    if (error) {
      console.error("Error saving booking:", error);
      alert("Booking failed: " + error.message);
      return;
    }

    const bookingId = data[0].id;

    try {
      const stripe = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
      );

      const response = await fetch(
        "http://localhost:5000/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: getServiceCost() * 100,
            bookingId,
            email: formState.email,
          }),
        }
      );

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

  const [currentReview, setCurrentReview] = useState(0);

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

  const faqs = [
    {
      question: "How to schedule online?",
      answer: "Fill in the form, choose your service and pay securely online.",
    },
    {
      question: "When will I get a confirmation?",
      answer: "A confirmation is emailed to you right after booking.",
    },
    {
      question: "Do you have a phone number?",
      answer: "Yes! Call us at (123) 456-7890 for support anytime.",
    },
    {
      question: "How do I select a date and time?",
      answer: "Simply pick a date from the calendar and you’re set.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="booking-layout4">
      <div className="form-wrapper4">
        <div className="booking-container4">
          <h2>Where Will The Service Be Taking Place?</h2>

          <div className="form-row4">
            <label>Location</label>
            <select
              value={formState.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="custom-select4"
            >
              <option>Snohomish County</option>
              <option>King County</option>
            </select>
          </div>

          <div className="form-row4">
            <label>Sub-Service</label>
            <select
              value={formState.subService}
              onChange={(e) => {
                handleChange("subService", e.target.value);
                handleChange("frequency", "");
              }}
              className="custom-select4"
            >
              <option value="">Select Sub-Service</option>
              {subServices.map((sub, i) => (
                <option key={i} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {formState.subService && (
            <div className="form-row4">
              <label>Frequency</label>
              <div className="button-group4">
                {frequencyOptions[formState.subService].map((freq, i) => (
                  <button
                    key={i}
                    className={formState.frequency === freq ? "active4" : ""}
                    onClick={() => handleChange("frequency", freq)}
                    type="button"
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="form-row4">
            <label>Date</label>
            <input
              type="date"
              value={formState.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="input4"
            />
          </div>

          <h2>Customer Details</h2>
          <div className="form-grid4">
            <input
              type="text"
              placeholder="First Name"
              value={formState.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="input4"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="input4"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formState.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="input4"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="input4"
            />
            <input
              type="text"
              placeholder="Address"
              value={formState.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="input4"
            />
          </div>

          <h2>Special Notes</h2>
          <textarea
            placeholder="Special Instructions or Notes"
            value={formState.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="textarea4"
          />

          <button
            type="button"
            className="submit-btn4"
            onClick={handleSubmit}
          >
            Confirm & Pay
          </button>
        </div>
      </div>

      <aside className="sidebar4">
        <div className="sidebar-card4">
          <h3>Summary Section</h3>
          <li>
            <strong>Industry:</strong> Commercial Cleaning
          </li>
          <li>
            <strong>Sub-Service:</strong> {formState.subService || "N/A"}
          </li>
          <li>
            <strong>Total:</strong>{" "}
            <span style={{ color: "red" }}>${getServiceCost()}</span>
          </li>
        </div>

        <div className="sidebar-card4 live-reviews4">
          <h3>Customer Reviews</h3>
          <p className="review-text4">{reviews[currentReview].text}</p>
          <p className="review-author4">
            ~ {reviews[currentReview].author}
          </p>
          <p className="review-stars4">
            {renderStars(reviews[currentReview].stars)}
          </p>
          <button onClick={nextReview} className="next-review4">
            Next ➜
          </button>
        </div>

        <div className="sidebar-card4">
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
                  <p
                    style={{
                      marginTop: "5px",
                      padding: "10px",
                      background: "#f5f5f5",
                      borderRadius: "6px",
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default BookingForm4;
