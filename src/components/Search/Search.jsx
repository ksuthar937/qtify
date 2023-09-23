// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
// import { useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Search({ data }) {
  // const [query, setQuery] = useState("");
  // const [searchData, setSearchData] = useState([]);

  // function handleSearch(e) {
  //   setQuery(e.target.value);
  //   let res = data.filter((album) =>
  //     album.title.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setSearchData(res);
  // }

  return (
    <div>
      {/* <form className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder="Search a album of your choice"
          value={query}
          onChange={handleSearch}
        />
        <div>
          <button className={styles.searchBtn} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {query ? "HeLlo" : null} */}
      <Autocomplete
        freeSolo
        disablePortal
        id="combo-box-demo"
        options={data.map((item) => item.title)}
        sx={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} size="small" label="Search album" />
        )}
      />
    </div>
  );
}

export default Search;
