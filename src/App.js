import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-section">
        <Card />
      </div>
    </div>
  );
}

export default App;
