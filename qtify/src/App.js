import "./App.css";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Logo />
        <Search placeH={"Search a album of your choice"} />
        <Button
          text="Give Feedback"
          onClick={() => alert("Feedback button clicked!")}
        />
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
