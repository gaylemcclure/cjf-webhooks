const router = require("express").Router();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base("app6Pf3LnjSQd9AnE");

router.get("/members", async (req, res) => {
  base("Membership Form").create(
    [
      {
        fields: {
          "Entry ID": "141",
          "First Name": "Gayle",
          "Last Name": "McC",
          "Entry Date": "2024-11-06T02:25:26.000Z",
          "Transaction ID": "nZphR3MqmjF38xAkLeBmcjDiNpUZY",
          "Payment Amount": 20,
          "Payment Status": "Paid",
          Email: "gaylekdennison@gmail.com",
          Phone: "(041) 910-7175",
          "Street Address": "18 Pen St",
          City: "Campbells Creek",
          Postcode: "3451",
          State: "VIC",
          "Attend AGM": "attend",
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );

  // res.send({
  //   publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
  //   unitAmount: price.unit_amount,
  //   currency: price.currency,
  //   description: prod.description,
  //   name: prod.name,
  //   interval: price.recurring.interval,
  // });
});

// Fetch the Checkout Session to display the JSON result on the success page
router.get("/checkout-session", async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

// router.post('/create-checkout-session', async (req, res) => {
//   const domainURL = process.env.DOMAIN;

//   const { quantity } = 1;

//   // Create new Checkout Session for the order
//   // Other optional params include:
//   // [billing_address_collection] - to display billing address details on the page
//   // [customer] - if you have an existing Stripe Customer ID
//   // [customer_email] - lets you prefill the email input in the Checkout page
//   // [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
//   // For full details see https://stripe.com/docs/api/checkout/sessions/create
//   const session = await stripe.checkout.sessions.create({
//     mode: 'payment',
//     line_items: [
//       {
//         price: process.env.PRICE,
//         quantity: quantity
//       },
//     ],
//     // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
//     success_url: `${domainURL}/success=?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${domainURL}/canceled`,
//     // automatic_tax: {enabled: true},
//   });

//   return res.redirect(303, session.url);
// });

module.exports = router;
