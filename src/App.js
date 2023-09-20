import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchTopAlbums } from "./api/apiCall";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      alert("Error while fetching Data");
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbums(data);
    } catch (error) {
      alert("Error while fetching Data");
    }
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="albums">
        <Section title="Top Albums" data={topAlbums} />
        <Section title="New Albums" data={newAlbums} />
      </div>
      {/* {newAlbums.map((album) => (
        <Card data={album} type="album" key={album.id} />
      ))} */}
    </div>
  );
}

export default App;
