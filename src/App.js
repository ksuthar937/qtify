import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/apiCall";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

import styles from "./App.module.css";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (evenr, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };

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

  const generateAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setAllSongs(data);
      setFilteredSongs(data);
    } catch (error) {
      alert("Error while fetching Data");
    }
  };

  const filteredData = (val) => {
    setFilteredSongs(val);
  };

  const generateFilterSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(allSongs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const response = allSongs.filter((song) => song.genre.key === key);
    filteredData(response);
  };

  useEffect(() => {
    generateFilterSongsData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
  }, []);

  return (
    <div>
      <Navbar data={[...topAlbums, ...newAlbums]} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          title="Top Albums"
          data={topAlbums}
          type="album"
          filteredDataValue={topAlbums}
        />
        <Section
          title="New Albums"
          data={newAlbums}
          type="album"
          filteredDataValue={newAlbums}
        />
        <hr className={styles.border} />

        <Section
          title="Songs"
          data={allSongs}
          type="song"
          value={value}
          handleChange={handleChange}
          filteredData={filteredSongs}
          filteredDataValue={filteredSongs}
        />
        <hr className={styles.border} />
      </div>
      <FaqAccordion />
      <MusicPlayer />
    </div>
  );
}

export default App;
