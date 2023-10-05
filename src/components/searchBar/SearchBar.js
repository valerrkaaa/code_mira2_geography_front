import React from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  return (
    <div className={classes.search}>
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
      {/* <div className={classes.resultSearch}>
        {props.data.map((value, key) => {
          return (
            <a className={classes.dataItem} href={value.link} target="_blank">
              <p>{value.name}</p>
            </a>
          );
        })}
      </div> */}
    </div>
  );
};

export default SearchBar;
