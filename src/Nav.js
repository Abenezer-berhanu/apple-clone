import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavHover from "./Components/NavHover";

export default function Nav() {
  const [displayHover1, setDisplayHover1] = useState(false);
  const [displayHover2, setDisplayHover2] = useState(false);
  const [displayHover3, setDisplayHover3] = useState(false);
  const [displayHover4, setDisplayHover4] = useState(false);
  const [displayHover5, setDisplayHover5] = useState(false);
  const [displayHover6, setDisplayHover6] = useState(false);
  const [displayHover7, setDisplayHover7] = useState(false);
  const [displayHumbergerMenu, setHumberger] = useState(false);
  const [displayHumbergerOpen, setHumbergerOpen] = useState(true);
  const [responsiveUl, setResponsiveUl] = useState(false);

  const hideNeasted = () => {
    setDisplayHover1(false);
    setDisplayHover2(false);
    setDisplayHover3(false);
    setDisplayHover4(false);
    setDisplayHover5(false);
    setDisplayHover6(false);
    setDisplayHover7(false);
  };

  return (
    <div className="nav--container">
      <AppleIcon className="nav--apple--icon" />
      <ul className={responsiveUl ? "responsive--ul" : "none--responsive--ul"}>
        <li
          onMouseOver={() => {
            setDisplayHover1(true);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover5(false);
            setDisplayHover6(false);
            setDisplayHover7(false);
          }}
        >
          <Link to="/">Store</Link>
        </li>
        <NavHover
          className={displayHover1 ? "nav--hover--container" : "display--none"}
          hideNeasted={hideNeasted}
          onMouseOver={() => {
            setDisplayHover1(true);
          }}
          onMouseOut={() => {
            setDisplayHover1(false);
          }}
        />
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(true);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover5(false);
            setDisplayHover6(false);
            setDisplayHover7(false);
          }}
        >
          <Link to="/Mac">Mac</Link>
        </li>
        <NavHover
          className={displayHover2 ? "nav--hover--container" : "display--none"}
          hideNeasted={hideNeasted}
          onMouseOver={() => {
            setDisplayHover2(true);
          }}
          onMouseOut={() => {
            setDisplayHover2(false);
          }}
        />
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(true);
            setDisplayHover4(false);
            setDisplayHover5(false);
            setDisplayHover6(false);
            setDisplayHover7(false);
          }}
        >
          <Link to="/Ipad">iPad</Link>
        </li>
        <NavHover
          className={displayHover3 ? "nav--hover--container" : "display--none"}
          hideNeasted={hideNeasted}
          onMouseOver={() => {
            setDisplayHover3(true);
          }}
          onMouseOut={() => {
            setDisplayHover3(false);
          }}
        />
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(true);
            setDisplayHover5(false);
            setDisplayHover6(false);
            setDisplayHover7(false);
          }}
        >
          <Link to="/Iphone">iPhone</Link>
        </li>
        <NavHover
          className={displayHover4 ? "nav--hover--container" : "display--none"}
          hideNeasted={hideNeasted}
          onMouseOver={() => {
            setDisplayHover4(true);
          }}
          onMouseOut={() => {
            setDisplayHover4(false);
          }}
        />
        
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover5(false);
            setDisplayHover6(true);
            setDisplayHover7(false);
          }}
        >
          <Link to="/Accessories">Accessories</Link>
        </li>
        <NavHover
          className={displayHover6 ? "nav--hover--container" : "display--none"}
          hideNeasted={hideNeasted}
          onMouseOver={() => {
            setDisplayHover6(true);
          }}
          onMouseOut={() => {
            setDisplayHover6(false);
          }}
        />
      </ul>

      <div
        className={displayHumbergerOpen ? "nav--open" : "nav--open--hidden"}
        onClick={() => {
          setHumberger(true);
          setHumbergerOpen(false);
          setResponsiveUl(true);
        }}
      >
        <MenuIcon />
      </div>
      <div
        className={displayHumbergerMenu ? "nav--close" : "nav--close--hidden"}
        onClick={() => {
          setHumberger(false);
          setHumbergerOpen(true);
          setResponsiveUl(false);
        }}
      >
        <CloseIcon />
      </div>

      <div className="nav--right--icons">
        <SearchIcon className="nav--icon" />
        <WorkOutlineIcon className="nav--icon" />
      </div>
    </div>
  );
}
