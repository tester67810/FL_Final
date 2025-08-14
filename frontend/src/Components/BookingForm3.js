
import React, { useState, useEffect } from "react";
import "../Styles/BookingForm3.css";
import { supabase } from "../supabaseClient";
import { loadStripe } from "@stripe/stripe-js";

function BookingForm3() {
  const [selectedFrequency, setSelectedFrequency] = useState("");
 const [selectedExtras, setSelectedExtras] = useState({});
 const [couponCode, setCouponCode] = useState("");
const [discountPercent, setDiscountPercent] = useState(0);
const [couponError, setCouponError] = useState("");


  const [selectedKeyInfo, setSelectedKeyInfo] = useState("");
  const [selectedRooms, setSelectedRooms] = useState(0);
  const [selectedStairs, setSelectedStairs] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

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

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const extrasOptions = [
    "Pet, Food, Drink Stain",
    "HAZARD",
    "WINE STAIN REMOVAL",
    "HALLWAYS",
  ];

  const keyInfoOptions = [
    "Someone Will Be At Home",
    "I Will Hide The Keys",
    "I will Leave the Key (Leave the Instructions on the Notes)",
    "I will provide an Access Code (Leave the Code on the Notes)",
    "Other (Leave the Instruction on the Notes)",
  ];

const calculateTotal = () => {
  const frequency = selectedFrequency;

  const extrasPrices = {
    "Pet, Food, Drink Stain": {
      "One-Time": 25.78,
      "Every 6 Months": 23.2,
      "Every 3 Months": 21.91,
    },
    "HAZARD": {
      "One-Time": 41.24,
      "Every 6 Months": 37.12,
      "Every 3 Months": 35.05,
    },
    "WINE STAIN REMOVAL": {
      "One-Time": 41.24,
      "Every 6 Months": 37.12,
      "Every 3 Months": 35.05,
    },
    "HALLWAYS": {
      "One-Time": 8.25,
      "Every 6 Months": 7.42,
      "Every 3 Months": 7.01,
    },
  };

  const roomAndStairPrices = {
    "One-Time": 52,
    "Every 6 Months": 47,
    "Every 3 Months": 44,
  };

  const getPrice = (item) => {
    if (extrasPrices[item] && frequency) {
      return extrasPrices[item][frequency] || 0;
    }
    return 0;
  };

  const extrasCost = Object.entries(selectedExtras).reduce((total, [label, qty]) => {
    const price = getPrice(label);
    return total + price * qty;
  }, 0);

  const roomPrice = roomAndStairPrices[frequency] || 0;
  const totalRoomsCost = selectedRooms * roomPrice;
  const totalStairsCost = selectedStairs * roomPrice;

  let total = totalRoomsCost + totalStairsCost + extrasCost;

  // ✅ Apply discount if any
  if (discountPercent > 0) {
    const discountAmount = (total * discountPercent) / 100;
    total -= discountAmount;
  }

  return Number(total.toFixed(2));
};



  const handleSubmit = async () => {
    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("bookings1")
        .insert([
          {
            frequency: selectedFrequency,
            extras: selectedExtras,
            rooms: selectedRooms,
            stairs: selectedStairs,
            instructions: selectedKeyInfo,
            notes: specialNotes,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            address: address,
            amount: calculateTotal(),
            payment_status: "pending",
          },
        ])
        .select();

      if (error) {
        console.error("Error saving booking:", error);
        alert("Booking failed: " + error.message);
        return;
      }

      const bookingId = data[0].id;

      const stripe = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
      );

   const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: calculateTotal() * 100,
            bookingId,
            email: email,
          }),
        }
      );

      const session = await response.json();

          if (session.url) {
  window.open(session.url, "_blank"); // opens in a new tab
} else {
  throw new Error("Stripe redirect failed");
}
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment error occurred.");
    }
  };

  const renderStars = (count) => "⭐".repeat(count);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

return (
    <div className="booking-layout3">
      <div className="booking-form3-container3">
        <div className="section3">
          <h3>Where Will The Service Be Taking Place?</h3>
          <div className="select-group3">
            <label>Location</label>
            <select style={{ marginTop: 15 }}>
              <option>Snohomish County</option>
              <option>King County</option>
            </select>
          </div>
          <label>Frequency</label>
          <div className="select-buttons3">
            {["Every 3 Months", "Every 6 Months", "One-Time"].map((label) => (
              <button
                key={label}
                className={selectedFrequency === label ? "selected3" : ""}
                style={{ marginTop: 15 }}
                onClick={() => setSelectedFrequency(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="section3">
          <h3>What Needs To Be Done?</h3>
          <p>These options are made for you by default. You can change the pricing or set up different forms or industries to fit your company.</p>
          <div className="select-group3">
            <select
              value={selectedRooms}
              onChange={(e) => setSelectedRooms(Number(e.target.value))}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={num}>
                  {num} Rooms
                </option>
              ))}
            </select>
            <select
              value={selectedStairs}
              onChange={(e) => setSelectedStairs(Number(e.target.value))}
            >
              {[...Array(6).keys()].map((num) => (
                <option key={num} value={num}>
                  {num} Staircase
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="section3">
          <h3>Select Extras</h3>
          <p>If you have extras, you can set them up here if required.</p>
          <div className="extra-options3">
  {extrasOptions.map((label) => (
    <div key={label} className="extra-box3">
      <span>{label}</span>
      <div className="qty-controls">
        <button
          onClick={() =>
            setSelectedExtras((prev) => ({
              ...prev,
              [label]: Math.max((prev[label] || 0) - 1, 0),
            }))
          }
        >
          −
        </button>
        <span>{selectedExtras[label] || 0}</span>
        <button
          onClick={() =>
            setSelectedExtras((prev) => ({
              ...prev,
              [label]: (prev[label] || 0) + 1,
            }))
          }
        >
          +
        </button>
      </div>
    </div>
  ))}
</div>

        </div>

        <div className="section3">
          <h3>Choose Service Provider</h3>
          <input type="date" className="date-picker3" />
        </div>

        <div className="section3">
          <h3>Customer Details</h3>
          <div className="input-group3">
            <input type="text" placeholder="Ex: James" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Ex: Lee" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="input-group3">
            <input type="email" placeholder="Ex: example@xyz.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="input-group3">
            <input type="text" placeholder="Type Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>

        <div className="section3">
          <h3>Key Information & Job Notes</h3>
          <div className="button-group3">
            {keyInfoOptions.map((label) => (
              <button
                key={label}
                className={selectedKeyInfo === label ? "selected3" : ""}
                onClick={() => setSelectedKeyInfo(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="section3">
          <h3>Special Notes Or Instructions</h3>
          <p>Would You Like To Add Any Notes?</p>
          <textarea
            className="textarea3"
            placeholder="Special Notes Or Instructions"
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
          />
        </div>
        <div className="section3">
  <h3>Coupon Code</h3>
  <input
    type="text"
    placeholder="Enter Coupon Code"
    value={couponCode}
    onChange={(e) => setCouponCode(e.target.value)}
    className="coupon-input3"
  />
  <button
    className="a3"
    onClick={() => {
      const code = couponCode.trim().toLowerCase();
      // Replace with your actual codes
      if (code === "save10") {
        setDiscountPercent(10);
        setCouponError("");
      } else if (code === "save20") {
        setDiscountPercent(20);
        setCouponError("");
      } else {
        setDiscountPercent(0);
        setCouponError("Invalid coupon code");
      }
    }}
  >
    Apply
  </button>
  {couponError && <p style={{ color: "red" }}>{couponError}</p>}
  {discountPercent > 0 && (
    <p style={{ color: "green" }}>
   
    </p>
  )}
</div>


        <button className="submit-button3" onClick={handleSubmit}>
          Confirm & Pay
        </button>
      </div>

      <aside className="sidebar3">
        <div className="sidebar-card3">
          <h3>Summary Section</h3>
          <li><strong>Industry:</strong> Carpet Cleaning</li>
          <li><strong>Frequency:</strong> {selectedFrequency || "Not selected"}</li>
          <li><strong>Rooms:</strong> {selectedRooms}</li>
          <li><strong>Staircases:</strong> {selectedStairs}</li>
       <li>
  <strong>Extras:</strong>{" "}
  {Object.entries(selectedExtras).length === 0
    ? "None"
    : Object.entries(selectedExtras)
        .filter(([_, qty]) => qty > 0)
        .map(([label, qty]) => `${label} × ${qty}`)
        .join(", ")}
</li>


<li>
  <strong>Discount:</strong>{" "}
  {discountPercent > 0 ? `-${discountPercent}%` : "None"}
</li>


          <li><strong>Total:</strong> <span style={{ color: "red" }}>${calculateTotal()}</span></li>
        </div>

        <div className="sidebar-card3 live-reviews3">
          <h3>Customer Reviews</h3>
          <p className="review-text3">{reviews[currentReview].text}</p>
          <p className="review-author3">~ {reviews[currentReview].author}</p>
          <p className="review-stars3">{renderStars(reviews[currentReview].stars)}</p>
          <button onClick={nextReview} className="next-review3">Next ➜</button>
        </div>

        <div className="sidebar-card3">
          <h3>Popular Questions</h3>
          <ul>
            {[
              {
                question: "How to schedule online?",
                answer: "Use our booking form, pick a service and time, and pay online securely.",
              },
              {
                question: "When will I get a confirmation?",
                answer: "Right after booking, you’ll receive an email and SMS confirmation.",
              },
              {
                question: "Do you have a phone number?",
                answer: "Yes! Call us anytime at (123) 456-7890.",
              },
              {
                question: "How do I select a date and time?",
                answer: "Pick your desired date from the calendar and choose a time slot.",
              },
            ].map((faq, index) => (
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

export default BookingForm3;
