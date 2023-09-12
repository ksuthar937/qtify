import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TobAlbums from "./components/TopAlbums/TobAlbums";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-section">
        <TobAlbums />
      </div>
    </div>
  );
}

export default App;
