const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }


  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    console.log('Payment completed:', session.id);


    const { error } = await supabase
      .from('payments')
      .update({ status: 'paid' })
      .eq('stripe_session_id', session.id);

    if (error) {
      console.error('Supabase update failed:', error);
      return res.status(500).send('Supabase update failed');
    }
  }

  res.json({ received: true });
});

module.exports = router;
