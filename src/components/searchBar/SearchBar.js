import React from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  return (
    <div className={classes.searchInput}>
      <input
        className={classes.searhLine}
        placeholder={props.placeholder}
        type="text"
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
