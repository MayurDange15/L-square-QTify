import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { Outlet } from "react-router-dom";
import {
  fetchNewAlbum,
  fetchTopAlbum,
  fetchFilters,
  fetchSongs,
} from "./components/api/api";

function App() {
  // const [searchData, SetSearchData] = useState([]);
  const [data, setData] = useState({});
  const generateData = (key, dataSource) => {
    dataSource().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbum", fetchTopAlbum);
    generateData("newAlbum", fetchNewAlbum);
    generateData("genres", fetchFilters);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbum = [], newAlbum = [], genres = [], songs = [] } = data;

  return (
    <>
      <Navbar searchData={[...topAlbum, newAlbum]}>
        <Logo />
        <Search placeholder={"Search a album of your choice"} />
        <Button
          text="Give Feedback"
          onClick={() => alert("Feedback button clicked!")}
        />
      </Navbar>
      <Outlet context={{ data: { topAlbum, newAlbum, genres, songs } }} />
    </>
  );
}

export default App;
