// require("dotenv").config({ path: __dirname + "/../.env" });

// const express = require("express");
// const cors = require("cors");
// const Stripe = require("stripe");
// const { createClient } = require("@supabase/supabase-js");
// const bodyParser = require("body-parser");

// // 👉 Initialize Stripe
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // 👉 Supabase client
// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// const app = express();

// // ✅ CORS
// app.use(cors());

// // ✅ JSON for normal routes
// app.use(express.json());

// // ✅ Stripe Checkout Session
// app.post("/create-checkout-session", async (req, res) => {
//   const { bookingId, email, amount } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "Ivory Standard Booking",
//               description: `Booking ID: ${bookingId}`,
//             },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//       customer_email: email,
//       metadata: { bookingId: bookingId.toString() },
//       success_url: `http://localhost:3001/success?booking_id=${bookingId}`,
//       cancel_url: `http://localhost:3001/cancel`,
//     });

//     res.json({ url: session.url });
//   } catch (err) {
//     console.error("Stripe error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Stripe Webhook Handler
// app.post(
//   "/api/stripe-webhook",
//   // Use raw body for signature verification
//   bodyParser.raw({ type: "application/json" }),
//   async (req, res) => {
//     console.log("✅ Webhook hit!"); // <----- Put this here
//     const sig = req.headers["stripe-signature"];
//     const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//     } catch (err) {
//       console.error("❌ Webhook signature verification failed:", err.message);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     // ✅ Handle event type
//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       const bookingId = session.metadata.bookingId;

//       console.log(`✅ Payment completed for booking: ${bookingId}`);

//       // Update your Supabase booking to mark as 'paid'
//       const { error } = await supabase
//         .from("bookings1")
//         .update({ payment_status: "paid" })
//         .eq("id", bookingId);

//       if (error) {
//         console.error("❌ Failed to update booking status:", error.message);
//       } else {
//         console.log("✅ Booking marked as paid in Supabase.");
//       }
//     }

//     res.status(200).json({ received: true });
//   }
// );

// // ✅ Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

require("dotenv").config(); // No need to provide path — default is current directory



const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const { createClient } = require("@supabase/supabase-js");

// 👉 Initialize Stripe with secret key from .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// 👉 Create Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const app = express();

// Enable CORS
app.use(cors());

// 👉 Normal JSON parser — DO NOT use for webhook route
app.use(express.json({
  verify: (req, res, buf) => {
    if (req.originalUrl === "/webhook") {
      req.rawBody = buf.toString();
    }
  },
}));

// ✅ Create Stripe Checkout Session
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
            product_data: { name: "Ivory Standard Booking", description: `Booking ID: ${bookingId}` },
            unit_amount: amount, // amount in cents
          },
          quantity: 1,
        },
      ],
      customer_email: email,
metadata: { bookingId: bookingId.toString() },
success_url: `https://fl-final.vercel.app/success`,
cancel_url: `https://fl-final.vercel.app/cancel`,

    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Stripe Webhook endpoint
app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // ✅ Use your metadata bookingId
    const bookingId = session.metadata.bookingId;
    console.log(`✅ Payment completed for bookingId: ${bookingId}`);

    const { error } = await supabase
      .from("bookings1")
      .update({ payment_status: "paid" })
      .eq("id", bookingId);

    if (error) {
      console.error("❌ Supabase update failed:", error.message);
      return res.status(500).send("Supabase update failed");
    }

    console.log("✅ Booking marked as paid in Supabase.");
  }

  res.json({ received: true });
});


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


