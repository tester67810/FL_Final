

  
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/BookingForm.css";
import { supabase } from "../supabaseClient";

function BookingForm() {
  const frequencyOptions = ["Weekly", "Every Other Week", "Monthly", "One-Time"];
  const tipsOptions = ["0%", "10%", "15%", "20%"];
  const parkingOptions = ["$0", "$5", "$10", "$20"];
  const extrasList = ["Extra Heavy Duty", "Blinds", "Interior Windows", "Oven", "Garage"];
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
      "Park in my Driveway",
      "Paid Parking Available Nearby",
      "Street Parking",
      "Garage Parking (leave instructions)",
    ],
  };

  const [formState, setFormState] = useState({
    location: "Snohomish County",
    service: "Select Option",
    frequency: "",
    bedrooms: 0,
    bathrooms: 0,
    halfBath: 0,
    den: 0,
    extras: {},
    instructions: {},
    date: "",
    tip: "",
    parkingFee: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    hours: 0,
    minutes: 0,
    coupon: "",
    discount: 0,
  });

  const [currentReview, setCurrentReview] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const reviews = [
    { text: "Fantastic service, spotless clean!", author: "Emily R.", stars: 5 },
    { text: "They did a great job with my office.", author: "Michael S.", stars: 4 },
    { text: "Very professional and thorough.", author: "Sophia W.", stars: 5 },
    { text: "Quick, efficient, and friendly!", author: "Daniel T.", stars: 4 },
    { text: "Highly recommended!", author: "Benjamin C.", stars: 5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      return {
        ...prev,
        extras: { ...prev.extras, [extra]: Math.max(current + delta, 0) },
      };
    });
  };

  const applyCoupon = () => {
    const code = formState.coupon.trim().toLowerCase();
    let discount = 0;
    if (code === "save10") discount = 10;
    else if (code === "save20") discount = 20;
    else if (code === "flat5") discount = 5;
    else {
      alert("Invalid coupon code");
      return;
    }
    setFormState((prev) => ({ ...prev, discount }));
  };

  const calculateTotal = () => {
    const {
      bedrooms,
      bathrooms,
      halfBath,
      den,
      extras,
      frequency,
      service,
      tip,
      parkingFee,
      hours,
      minutes,
      discount,
    } = formState;

    let subtotal = 0;

    let rates = { bed: 0, bath: 0, half: 0, den: 0, serviceCharge: 0 };

    if (service === "Regular Cleaning") {
      switch (frequency) {
        case "Weekly":
          rates = { bed: 15.46, bath: 19.33, half: 11.6, den: 19.33, serviceCharge: 81.2 };
          break;
        case "Every Other Week":
          rates = { bed: 17.53, bath: 21.91, half: 13.15, den: 21.91, serviceCharge: 92.01 };
          break;
        case "Monthly":
          rates = { bed: 19.59, bath: 24.48, half: 14.69, den: 24.48, serviceCharge: 102.85 };
          break;
        default:
          rates = { bed: 20.62, bath: 25.78, half: 15.47, den: 25.78, serviceCharge: 108.25 };
      }

      subtotal += bedrooms * rates.bed + bathrooms * rates.bath + halfBath * rates.half + den * rates.den + rates.serviceCharge;
    } else if (["Deep Cleaning", "Move Out & Move In"].includes(service)) {
      rates = { bed: 30.03, bath: 25.78, half: 15.47, den: 25.78, serviceCharge: 201.94 };
      subtotal += bedrooms * rates.bed + bathrooms * rates.bath + halfBath * rates.half + den * rates.den + rates.serviceCharge;
    } else if (service === "Post Construction") {
      subtotal += ((hours || 0) + (minutes || 0) / 60) * 154.65;
    }

    Object.values(extras).forEach((count) => {
      subtotal += count * 0; // each extra = $0, update if needed
    });

    if (tip.endsWith("%")) {
      const percent = parseInt(tip.replace("%", ""), 10);
      if (!isNaN(percent)) subtotal += subtotal * (percent / 100);
    }

    if (parkingFee.startsWith("$")) {
      const fee = parseFloat(parkingFee.replace("$", ""));
      if (!isNaN(fee)) subtotal += fee;
    }

    subtotal -= discount;
    return Math.max(subtotal, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "date"];

    if (formState.service === "Regular Cleaning" && !formState.frequency) {
      alert("Please select a cleaning frequency.");
      return;
    }

    for (const field of requiredFields) {
      if (!formState[field]) {
        alert(`Please fill out the ${field}`);
        return;
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      alert("Invalid email format");
      return;
    }

    for (const q of instructionQuestions) {
      if (!formState.instructions[q]) {
        alert(`Missing answer for: ${q}`);
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

    const { data, error } = await supabase.from("bookings1").insert([formData]).select();

    if (error) {
      alert("Failed: " + error.message);
      return;
    }

    const bookingId = data[0].id;
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: parseFloat(calculateTotal()) * 100,
        bookingId,
        email: formState.email,
      }),
    });

    const session = await res.json();
    if (session.url) window.location.href = session.url;
    else alert("Stripe redirect failed");
  };

  const renderStars = (count) => "⭐".repeat(count);

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

           {formState.service === "Regular Cleaning" && (
  <>
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
  </>
)}
{formState.service === "Post Construction" && (
  <>
    <h2>Time Required</h2>
    <div className="form-grid">
      <div>
        <label>Hours</label>
        <select
          value={formState.hours}
          onChange={(e) => handleChange("hours", +e.target.value)}
          className="custom-select"
        >
          {[...Array(13)].map((_, i) => (
            <option key={i} value={i}>
              {i} hr
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Minutes</label>
        <select
          value={formState.minutes}
          onChange={(e) => handleChange("minutes", +e.target.value)}
          className="custom-select"
        >
          {[0, 15, 30, 45].map((m) => (
            <option key={m} value={m}>
              {m} min
            </option>
          ))}
        </select>
      </div>
    </div>
  </>
)}


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


          <h2>Apply Coupon Code</h2>
          <div className="form-row">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={formState.coupon}
              onChange={(e) => handleChange("coupon", e.target.value)}
            />
            <button className="c-button" onClick={applyCoupon}>Apply</button>
          </div>

          {/* You can add your full form fields here like service, frequency, bedrooms, etc. */}

          <button className="submit-btn" onClick={handleSubmit}>
            Confirm & Pay
          </button>
        </div>
      </div>

      <div className="sidebar">
        <div className="sidebar-card company-summary">
          <h3>Summary</h3>
          <ul>
            <li><strong>Service:</strong> {formState.service}</li>
            <li><strong>Frequency:</strong> {formState.frequency || "N/A"}</li>
            <li><strong>Bedrooms:</strong> {formState.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {formState.bathrooms}</li>
            <li><strong>Discount:</strong> -{formState.discount}%</li>
            <li><strong>Total:</strong> <span style={{ color: "red" }}>${calculateTotal()}</span></li>
          </ul>
        </div>

        <div className="sidebar-card review-box">
          <h4>Customer Review</h4>
          <p>{reviews[currentReview].text}</p>
          <p>~ {reviews[currentReview].author}</p>
          <p>{renderStars(reviews[currentReview].stars)}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
