import { useSelector } from "react-redux";
import { useState } from "react";

const BookingSummary = () => {
  const selectedBus = useSelector((state) => state.bus.selectedBus);
  const selectedSeats = useSelector((state) => state.bus.selectedSeats);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [paid, setPaid] = useState(false);

  if (!selectedBus || selectedSeats.length === 0) return null;

  const totalPrice = selectedSeats.length * selectedBus.price;

  const handlePayNow = () => {
    if (!name || !age || !gender || !phone) return;
    setPaid(true);
  };

  return (
    <div className="summary">
      <h2>Booking Summary</h2>

      <p><strong>Bus:</strong> {selectedBus.name}</p>
      <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
      <p className="total"><strong>Total:</strong> ₹{totalPrice}</p>

      <h2>Passenger Details</h2>

      <div className="field">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="field">
        <label>Mobile</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      {!paid ? (
        <button className="pay-btn" onClick={handlePayNow}>
          Pay Now ₹{totalPrice}
        </button>
      ) : (
        <p className="success-msg"> Payment Successful! Ticket Booked</p>
      )}
    </div>
  );
};

export default BookingSummary;