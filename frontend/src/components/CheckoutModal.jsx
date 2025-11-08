import React from "react";


const CheckoutModal = ({ modalData, setIsModalOpen }) => {
  if (!modalData) return null;

  const { name, email, total, timeStamp } = modalData;


  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Checkout Successful 🎉</h2>
        <div className="modal-content">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Total:</strong> ₹{total.toFixed(2)}</p>
          <p><strong>Timestamp:</strong> {new Date(timeStamp).toLocaleString()}</p>
        </div>
        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export { CheckoutModal };
