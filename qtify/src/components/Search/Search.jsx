import React, { useState } from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search"; // Corrected import
import Autocomplete from "@mui/material/Autocomplete"; // Corrected Autocomplete import
// import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material"; // Importing TextField for Autocomplete

// Helper function to truncate long text
const truncate = (str, num) => {
  return str.length > num ? str.slice(0, num) + "..." : str;
};

// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState(null); // Managing the selected value with useState
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={onSubmit}
      >
        <Autocomplete
          options={searchData || []}
          getOptionLabel={(option) => option.title}
          value={value} // Controlled value
          onChange={(event, newValue) => {
            setValue(newValue); // Update the state when a new value is selected
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={styles.search}
              placeholder={placeholder}
              required
              name="album"
            />
          )}
          renderOption={(props, option) => {
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li {...props} className={styles.listElement}>
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>

                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          }}
        />
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
