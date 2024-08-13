import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cart.products.map((product) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          images:[product.img],
          description:product.desc,
          metadata:{
            id:product._id
          }
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    };
  });
  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/orders`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.send({ url: session.url });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
