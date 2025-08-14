import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("booking_id");
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookingId) return;

    const fetchBooking = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings1")
        .select("*")
        .eq("id", bookingId)
        .single();

      if (error) {
        console.error("Error fetching booking:", error);
      } else {
        setBooking(data);
      }
      setLoading(false);
    };

    fetchBooking();
  }, [bookingId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading booking details...</h2>
      </div>
    );
  }

  if (!booking) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>❌ Booking not found.</h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Payment Successful!</h1>
      <h2>Thank you, {booking.first_name} {booking.last_name}!</h2>
      <p>We’ve received your payment for <strong>{booking.service}</strong>.</p>

      <div style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "left"
      }}>
        <h3>Booking Details</h3>
        <p><strong>Booking ID:</strong> {booking.id}</p>
        <p><strong>Service:</strong> {booking.service}</p>
        <p><strong>Frequency:</strong> {booking.frequency}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Location:</strong> {booking.location}</p>
        <p><strong>Address:</strong> {booking.address}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>
        <p><strong>Email:</strong> {booking.email}</p>


      </div>
    </div>
  );
}
