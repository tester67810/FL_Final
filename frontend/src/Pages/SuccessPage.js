import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export default function SuccessPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("bookingId");

  const [booking, setBooking] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!bookingId) return;
      const { data, error } = await supabase
        .from("bookings1")
        .select("*")
        .eq("id", bookingId)
        .single();

      if (error || !data) {
        setError(true);
      } else {
        setBooking(data);
      }
    };

    fetchBooking();
  }, [bookingId]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "green" }}>Payment Successful</h1>

      {error ? (
        <p>Thank you for your booking!</p>
      ) : booking ? (
        <div
          style={{
            margin: "20px auto",
            padding: "20px",
            maxWidth: "500px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <h2>Booking Details</h2>
          <p><strong>Service:</strong> {booking.service}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Location:</strong> {booking.location}</p>
          <p><strong>Total Paid:</strong> ${booking.total}</p>
        </div>
      ) : (
        <p>Loading booking details...</p>
      )}
    </div>
  );
}
