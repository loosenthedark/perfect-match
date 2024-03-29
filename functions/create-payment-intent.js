// domain/.netlify/functions/create-payment-intent

require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  // console.log(event);

  if (event.body) {
    const { payment_amount, phone, email } = JSON.parse(event.body);
    // console.log(payment_amount);

    const calculateOrderAmount = () => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      return payment_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "eur",
        metadata: {
          user_phone: phone,
          user_email: email,
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: paymentIntent.client_secret,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          msg: error.message,
        }),
      };
    }
  } else {
    return {
      statusCode: 200,
      body: "Create payment intent",
    };
  }
};
