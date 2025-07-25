import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/BookingForm.css";
import { supabase } from "../supabaseClient";

function BookingForm() {
  const frequencyOptions = ["Weekly", "Every Other Week", "Monthly", "One-Time"];
  const tipsOptions = ["0%", "10%", "15%", "20%", "Other"];
  const parkingOptions = ["$0", "$5", "$10", "$20", "Other"];
  const extrasList = ["Extra Heavy Duty", "Blinds", "Interior Windows", "Oven", "Garage"];

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

  const instructionQuestions = [
    "How Clean Is Your Home?",
    "How Will We Get Inside?",
    "Where Can We Park?",
  ];

  const instructionOptions = {
    "How Clean Is Your Home?": [
      "Very Dirty",
      "Needs Extra Attention",
      "Mostly Clean",
      "Regularly Cleaned and Maintained",
      "Almost Spotless",
    ],
    "How Will We Get Inside?": [
      "I will be Home",
      "I will Leave the Key (Leave the Instructions on the Notes)",
      "I will provide an Access Code (Leave the Code on the Notes)",
      "Other (Leave the Instruction on the Notes)",
    ],
    "Where Can We Park?": [
      "Park in my Driveway (Leave the stall number if applicable on the notes)",
      "Paid Parking Available Nearby",
      "There is Street Parking",
      "Parking in the Park Garage (Leave the instructions on the Notes)",
    ],
  };

  const [currentReview, setCurrentReview] = useState(0);
  const [formState, setFormState] = useState({
    location: "Snohomish County",
    service: "Select Option",
    frequency: null,
    bedrooms: 0,
    bathrooms: 0,
    halfBath: 0,
    den: 0,
    extras: {},
    instructions: {},
    date: "",
    tip: null,
    parkingFee: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    amount: 0,
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleInstructionChange = (question, value) => {
    setFormState((prev) => ({
      ...prev,
      instructions: { ...prev.instructions, [question]: value },
    }));
  };

  const adjustExtra = (extra, delta) => {
    setFormState((prev) => {
      const current = prev.extras[extra] || 0;
      const updatedCount = Math.max(current + delta, 0);
      return {
        ...prev,
        extras: { ...prev.extras, [extra]: updatedCount },
      };
    });
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const renderStars = (count) => "⭐".repeat(count);

 const calculateTotal = () => {
  const { bedrooms, bathrooms, halfBath, den, extras, frequency, service } = formState;

  let total = 40;

  total += bedrooms * 10;
  total += bathrooms * 10;
  total += halfBath * 10;
  total += den * 10;

  total += Object.values(extras).reduce((sum, count) => sum + count * 10, 0);

  // Frequency-specific pricing
  switch (frequency) {
    case "Weekly":
      total += 10;
      break;
    case "Every Other Week":
      total += 20;
      break;
    case "Monthly":
      total += 30;
      break;
    case "One-Time":
      total += 40;
      break;
    default:
      break;
  }

  // Service-specific pricing
  switch (service) {
    case "Regular Cleaning":
      total += 10;
      break;
    case "Move Out & Move In":
      total += 20;
      break;
    case "Deep Cleaning":
      total += 30;
      break;
    case "Post Construction":
      total += 40;
      break;
    default:
      break;
  }

  return total.toFixed(2);
};



  const handleSubmit = async (e) => {
  e.preventDefault();

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
    "frequency",
    "date",
  ];

  for (const field of requiredFields) {
    if (!formState[field] || formState[field].toString().trim() === "") {
      alert(`Please fill out the ${field} field.`);
      return;
    }
  }

  // ✅ Add email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formState.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  for (const question of instructionQuestions) {
    if (!formState.instructions[question]) {
      alert(`Please select an option for "${question}".`);
      return;
    }
  }

  const { halfBath, parkingFee, firstName, lastName, ...rest } = formState;

  const formData = {
    ...rest,
    half_bath: halfBath,
    parking_fee: parkingFee,
    first_name: firstName,
    last_name: lastName,
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
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: parseFloat(calculateTotal()) * 100,
        bookingId,
        email: formState.email,
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


  const faqs = [
    {
      question: "How to schedule online?",
      answer: "You can schedule online by filling out this form and confirming payment.",
    },
    {
      question: "When will I get a confirmation?",
      answer: "You will receive a confirmation email as soon as your booking is complete.",
    },
    {
      question: "Do you have a phone number?",
      answer: "Yes! Please find our contact number on our website or confirmation email.",
    },
    {
      question: "How do I select a date and time?",
      answer: "You can select your preferred date in the booking form above.",
    },
  ];

  return (
    <div className="booking-layout">
      <div className="form-wrapper">
        <div className="booking-container">
          <h2>Where Will The Service Be Taking Place?</h2>
          <div className="form-row">
            <label>Location</label>
            <select
              className="custom-select"
              value={formState.location}
              onChange={(e) => handleChange("location", e.target.value)}
            >
              <option>Snohomish County</option>
              <option>King County</option>
            </select>
          </div>

          <div className="form-row">
            <label>Services</label>
            <select
              className="custom-select"
              value={formState.service}
              onChange={(e) => handleChange("service", e.target.value)}
            >
               <option>Select Option</option>
              <option>Regular Cleaning</option>
              <option>Move Out & Move In</option>
              <option>Deep Cleaning</option>
              <option>Post Construction</option>
            </select>
          </div>

          <label>Frequency</label>
          <div className="form-row" style={{ marginTop: 15 }}>
            <div className="button-group">
              {frequencyOptions.map((freq, i) => (
                <button
                  key={i}
                  className={formState.frequency === freq ? "active" : ""}
                  onClick={() => handleChange("frequency", freq)}
                  type="button"
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          <h2>What Needs To Be Done?</h2>
          <div className="form-grid">
            {["bedrooms", "bathrooms", "halfBath", "den"].map((type, index) => (
              <div key={index}>
                <label>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
                <select
                  value={formState[type]}
                  style={{ marginTop: 10 }}
                  onChange={(e) => handleChange(type, +e.target.value)}
                  className="custom-select"
                >
                  {[...Array(type === "bedrooms" ? 7 : type === "bathrooms" ? 5 : type === "halfBath" ? 5 : 6)].map(
                    (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 0} {type}
                      </option>
                    )
                  )}
                </select>
              </div>
            ))}
          </div>

          <h2>Select Extras (With Count)</h2>
          <div className="extras-grid">
            {extrasList.map((extra) => (
              <div key={extra} className="extra-box">
                <p style={{ marginBottom: 10 }}>{extra}</p>
                <span>{formState.extras[extra] || 0}</span>
                <div className="button-gp">
                  <button type="button" onClick={() => adjustExtra(extra, -1)}>
                    -
                  </button>
                  <button type="button" onClick={() => adjustExtra(extra, 1)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2>Instructions for Providers</h2>
          {instructionQuestions.map((question, i) => (
            <div key={i} className="form-row">
              <label>{question}</label>
              <select
                className="custom-select"
                value={formState.instructions[question] || ""}
                onChange={(e) => handleInstructionChange(question, e.target.value)}
              >
                <option value="">Select Option</option>
                {instructionOptions[question].map((option, j) => (
                  <option key={j} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <h2>Select Date</h2>
          <div className="form-row">
            <label>Date</label>
            <input
              type="date"
              value={formState.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>

          <h2>Tips & Parking (Optional)</h2>
          <p style={{marginBottom: 15}}>Tips and parking are 100% optional-If you live in areas where parking is hard to find, a parking tip is often helpful and 100% of it goes to the provider to grab closest parking near you including expensive garage parking.</p>
          <label>Tips</label>
          <div className="form-row" style={{ marginTop: 10 }}>
            <div className="button-group">
              {tipsOptions.map((tipOption, i) => (
                <button
                  key={i}
                  className={formState.tip === tipOption ? "active" : ""}
                  onClick={() => handleChange("tip", tipOption)}
                  type="button"
                >
                  {tipOption}
                </button>
              ))}
            </div>
          </div>

          <label>Parking</label>
          <div className="form-row" style={{ marginTop: 10 }}>
            <div className="button-group">
              {parkingOptions.map((price, i) => (
                <button
                  key={i}
                  className={formState.parkingFee === price ? "active" : ""}
                  onClick={() => handleChange("parkingFee", price)}
                  type="button"
                >
                  {price}
                </button>
              ))}
            </div>
          </div>

          <h2>Customer Details</h2>
          <div className="form-grid">
            <input
              type="text"
              placeholder="First Name"
              value={formState.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formState.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={formState.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <h2>Special Notes Or Instructions</h2>
          <textarea
            placeholder="Special Notes or Instructions"
            value={formState.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />

          <button type="button" className="submit-btn" onClick={handleSubmit}>
            Confirm & Pay
          </button>
        </div>
      </div>

      <div className="sidebar">
        <div className="sidebar-card company-summary">
          <h3>Summary Section</h3>
        
          <ul>
            <li>
              <strong>Industry:</strong> House cleaning
            </li>
            <li>
              <strong>Service:</strong> {formState.service}
            </li>
            <li>
              <strong>Frequency:</strong> {formState.frequency || "N/A"}
            </li>
            <li>
              <strong>Bedrooms:</strong> {formState.bedrooms}
            </li>
            <li>
              <strong>Bathrooms:</strong> {formState.bathrooms}
            </li>
            <li>
              <strong>Half Bath:</strong> {formState.halfBath}
            </li>
            <li>
              <strong>Den/Office:</strong> {formState.den}
            </li>
            {Object.entries(formState.extras)
              .filter(([_, count]) => count > 0)
              .map(([extra, count]) => (
                <li key={extra}>
                  <strong>{extra}:</strong> {count}
                </li>
              ))}
          </ul>
          <li><strong> TOTAL: </strong>  <span style={{color: "red"}}>${calculateTotal()}</span></li>
         
          
        </div>

        <div className="sidebar-card3 live-reviews3">
          <h3>Customer Reviews</h3>
          <p className="review-text3">{reviews[currentReview].text}</p>
          <p className="review-author3">~ {reviews[currentReview].author}</p>
          <p className="review-stars3">{renderStars(reviews[currentReview].stars)}</p>
          <button
            onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
            className="next-review3"
          >
            Next ➜
          </button>
        </div>

        <div className="sidebar-card faq">
          <h4>Popular Questions</h4>
          <ul>
            {faqs.map((faq, index) => (
              <li
                key={index}
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
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
      </div>
    </div>
  );
}

export default BookingForm;
