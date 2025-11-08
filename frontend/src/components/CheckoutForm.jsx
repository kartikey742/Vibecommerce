import React, { useState } from "react";

const CheckoutForm = ({ onSubmit ,setIsForm}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="checkout-overlay">
  <div className="checkout-container">
  <h2>Checkout Details</h2>
  <form className="checkout-form" onSubmit={handleSubmit}>
    <label>
      Full Name:
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Email Address:
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>

    <div className="checkout-buttons">
      <button type="submit" className="checkout-btn">
        Submit
      </button>
      <button
        type="button"
        className="cancel-btn"
        onClick={() => setIsForm(false)}
      >
        Cancel
      </button>
    </div>
  </form>
</div>
</div>

  );
};

export default CheckoutForm;
