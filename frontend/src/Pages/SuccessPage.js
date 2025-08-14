import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`https://your-server-url.com/session/${sessionId}`)
        .then(res => res.json())
        .then(data => setDetails(data))
        .catch(err => console.error(err));
    }
  }, [sessionId]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Payment Successful!</h1>

      {details ? (
        <div>
          <p><strong>Amount:</strong> {(details.amount_total / 100).toFixed(2)} {details.currency.toUpperCase()}</p>
          <p><strong>Email:</strong> {details.customer_details?.email}</p>
          <p><strong>Payment Method:</strong> {details.payment_intent?.payment_method_types[0]}</p>
          <p><strong>Date:</strong> {new Date(details.created * 1000).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
}
