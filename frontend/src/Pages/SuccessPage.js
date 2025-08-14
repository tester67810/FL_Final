import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("booking_id");

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!bookingId) return;

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

  if (loading) return <p style={{ textAlign: "center" }}>Loading booking details...</p>;
  if (!booking) return <p style={{ textAlign: "center" }}>Booking not found.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Payment Successful!</h1>
      <h2>Booking Details</h2>
      <p><strong>Name:</strong> {booking.first_name} {booking.last_name}</p>
      <p><strong>Email:</strong> {booking.email}</p>
      <p><strong>Phone:</strong> {booking.phone}</p>
      <p><strong>Service:</strong> {booking.service}</p>
      <p><strong>Location:</strong> {booking.location}</p>
      <p><strong>Date:</strong> {booking.date}</p>
    </div>
  );
}
