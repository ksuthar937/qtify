import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/apiCall";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

import "./App.css";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      alert("Error while fetching Data");
    }
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {/* {topAlbums.map((album) => (
        <Card data={album} type="album" key={album.id} />
      ))} */}
      <div>
        <Section title="Top Albums" data={topAlbums} />
      </div>
    </div>
  );
}

export default App;
