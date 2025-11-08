const  express =require("express");
const dotenv =require("dotenv");
const  cors =require( "cors");
const { dbconnect } =require( "./config/dbconnect.js");
const productRoutes =require("./routes/Product.js");
const cartRoutes =require("./routes/Cart.js");
const seedDatabase =require( "./seed.js");
dotenv.config();
const Cart=require("./models/Cart.js");
const app = express();

app.use(cors());
app.use(express.json());

dbconnect();

app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.get("/", (req, res) => {
  res.send("Vibe Commerce API is running 🚀");
});
app.post("/api/checkout",async (req, res) => {
  try {
 const { cartItems } = req.body;
 const total= cartItems.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);
 await Cart.deleteMany({})
  res.json({success:true, message: "Checkout successful!", total ,timeStamp: new Date()});

  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({ success: false, message: "Checkout failed", error });
  }


});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`)); 
