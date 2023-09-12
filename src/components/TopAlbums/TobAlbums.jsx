import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./TopAlbums.module.css";
import axios from "axios";

function TobAlbums() {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        console.log(response);
        setTopAlbums(response.data);
      }
      fetchData();
    } catch (error) {
      alert("Error while fetching Data");
    }
  }, []);

  return (
    <div>
      <div className={styles.cardHeader}>
        <p>Top Albums</p>
        <p className={styles.cardHeaderText}>Collapse</p>
      </div>
      <div className={styles.card}>
        {topAlbums.map((album) => (
          <Card key={album.id} image={album.image} follows={album.follows} />
        ))}
      </div>
    </div>
  );
}

export default TobAlbums;
