import { useDispatch, useSelector } from "react-redux";
import { selectBus } from "../features/bus/busSlice";

const BusList = () => {
  const buses = useSelector((state) => state.bus.buses);
  const dispatch = useDispatch();

  return (
    <div className="bus-card">
      <h2>Select Bus</h2>
      {buses.map((bus) => (
        <div key={bus.id} style={{ marginBottom: "10px" }}>
          <strong>{bus.name}</strong> - ₹{bus.price}
          <br />
          <button onClick={() => dispatch(selectBus(bus))}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default BusList;