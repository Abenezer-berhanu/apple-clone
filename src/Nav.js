import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useState, useEffect } from "react";
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
  const [displayHover6, setDisplayHover6] = useState(false);
  const [displayHumbergerMenu, setHumberger] = useState(false);
  const [displayHumbergerOpen, setHumbergerOpen] = useState(true);
  const [responsiveUl, setResponsiveUl] = useState(false);
  const [showInput, setShowInput] = useState(false)
  const [screenSize, setScreenSize] = useState(true)

  const hideNeasted = () => {
    setDisplayHover1(false);
    setDisplayHover2(false);
    setDisplayHover3(false);
    setDisplayHover4(false);
    setDisplayHover6(false);
  };
  const handleClick = () => {
    setShowInput(!showInput)
  }
  
  return (
    <div className="nav--container">
      <AppleIcon className="nav--apple--icon" />  
      <ul className={responsiveUl ? "responsive--ul" : "none--responsive--ul"}>
      {screenSize && <>
        <li
          onMouseOver={() => {
            setDisplayHover1(true);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover6(false);
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
        </>}
        {!screenSize && <>
        <li
          onClick={() => {
            setDisplayHover1(true);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover6(false);
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
        </>}
        {screenSize && <>
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(true);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover6(false);
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
        </>}
        {!screenSize && <>
        <li
          onClick={() => {
            setDisplayHover1(false);
            setDisplayHover2(true);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover6(false);
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
        </>}
        {screenSize &&<>
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(true);
            setDisplayHover4(false);
            setDisplayHover6(false);
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
        </>}
        {!screenSize &&<>
        <li
          onClick={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(true);
            setDisplayHover4(false);
            setDisplayHover6(false);
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
        </>}
        {screenSize && <>
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(true);
            setDisplayHover6(false);
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
        </>}
        {!screenSize && <>
        <li
          onClick={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(true);
            setDisplayHover6(false);
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
        </>}
        {screenSize && <>
        <li
          onMouseOver={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover6(true);
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
        </>}
        {!screenSize && <>
        <li
          onClick={() => {
            setDisplayHover1(false);
            setDisplayHover2(false);
            setDisplayHover3(false);
            setDisplayHover4(false);
            setDisplayHover6(true);
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
        </>}
      </ul>

      <div
        className={displayHumbergerOpen ? "nav--open" : "nav--open--hidden"}
        onClick={() => {
          setHumberger(true);
          setHumbergerOpen(false);
          setResponsiveUl(true);
          setScreenSize(false)
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
        {showInput && <input type="text" placeholder="search..."/>}
        <SearchIcon className="nav--icon" onClick={handleClick}/>
        <WorkOutlineIcon className="nav--icon" />
      </div>
    </div>
  );
}
