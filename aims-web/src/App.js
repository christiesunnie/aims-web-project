import "./App.css";
import SideBySideCalendar from "./components/Calendar/SideBySide";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-indigo-400">
        Welcome to AIMS projec!
      </h1>
      <SideBySideCalendar/>
    </div>
  );
}

export default App;
