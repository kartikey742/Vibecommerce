const express = require("express");
const router = express.Router();
const { addToCart, getCartItems, removeCartItem,updateCartItem } = require("../controllers/Cart");

router.post("/cart", addToCart);
router.get("/cart", getCartItems);
router.delete("/cart/:id", removeCartItem);
router.put("/cart/:id", updateCartItem);

module.exports = router;