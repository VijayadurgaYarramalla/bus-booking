import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../features/bus/busSlice";

const SeatSelection = () => {
  const dispatch = useDispatch();
  const selectedBus = useSelector((state) => state.bus.selectedBus);
  const selectedSeats = useSelector((state) => state.bus.selectedSeats);

  if (!selectedBus) return null;

  const seats = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="seats">
      <h2>Choose Seats</h2>
      {seats.map((seat) => (
        <button
          key={seat}
          onClick={() => dispatch(toggleSeat(seat))}
          style={{
            margin: "5px",
            backgroundColor: selectedSeats.includes(seat)
              ? "green"
              : "gray",
            color: "white",
          }}
        >
          {seat}
        </button>
      ))}
    </div>
  );
};

export default SeatSelection;