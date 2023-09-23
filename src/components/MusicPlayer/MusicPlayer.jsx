import musicPlayer from "../../assets/music_Player.png";
import styles from "./MusicPlayer.module.css";

function MusicPlayer() {
  return (
    <div className={styles.wrapper}>
      <img src={musicPlayer} alt="musicPlayer" />
    </div>
  );
}

export default MusicPlayer;
