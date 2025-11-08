const Cart=require("../models/Cart");
const addToCart=async(req,res)=>{
  try {
    const { productId, quantity } = req.body;
    const item=await Cart.create({ productId, quantity});
    const populatedItem = await item.populate('productId');

    res.status(201).json({ message: "Item added to cart", data: populatedItem });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getCartItems=async(req,res)=>{
  try {
    const items=await Cart.find({}).populate('productId');
    res.json({ message: "Cart items fetched successfully", data: items });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
const removeCartItem=async(req,res)=>{
  try {
    const { id } = req.params;
    const deletedItem = await Cart.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item removed from cart", data: deletedItem });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
 
}
 const updateCartItem=async(req,res)=>{
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const updatedItem = await Cart.findByIdAndUpdate(
        id,
        { quantity },
        { new: true }
      ).populate('productId');
      res.json({ message: "Item updated successfully", data: updatedItem });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
module.exports={addToCart,getCartItems,removeCartItem,updateCartItem};
