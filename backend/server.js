require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const app = express();


app.use(cors());

app.use(express.json());


app.post("/create-checkout-session", async (req, res) => {
  const { bookingId, email, amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Ivory Standard Booking",
              description: `Booking ID: ${bookingId}`,
            },
            unit_amount: amount, 
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      metadata: { bookingId: bookingId.toString() },
     success_url: `https://fl-final.vercel.app/success?bookingId=${bookingId}`,
cancel_url: `https://fl-final.vercel.app/cancel`,

    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
