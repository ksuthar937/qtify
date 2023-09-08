import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

function Search() {
  return (
    <div>
      <form className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder="Search a album of your choice"
        />
        <div>
          <button className={styles.searchBtn} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
