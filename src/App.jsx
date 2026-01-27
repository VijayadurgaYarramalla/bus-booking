import BusList from "./components/BusList";
import SeatSelection from "./components/SeatSelection";
import BookingSummary from "./components/BookingSummary";

const App = () => {
  return (
    <div className="app">
      <h1>Bus Ticket Booking</h1>
      <BusList />
      <SeatSelection />
      <BookingSummary />
    </div>
  );
};

export default App;