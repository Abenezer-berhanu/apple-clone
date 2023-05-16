import { useState } from "react";
import { Link } from "react-router-dom";

export default function ChangebleSection({
  key,
  nav1Name1,
  nav1Name2,
  nav1Name3,
  nav1Name4,
  nav1Name5,
  nav1Name6,
  nav1Name7,
  nav1Icon1,
  nav1Icon2,
  nav1Icon3,
  nav1Icon4,
  nav1Icon5,
  nav1Icon6,
  nav1Icon7,
  nav1activeDef1,
  nav1activeDef2,
  nav1activeDef3,
  nav1activeDef4,
  nav1activeDef5,
  nav1activeDef6,
  nav1activeDef7,
  nav1activeImg1,
  nav1activeImg2,
  nav1activeImg3,
  nav1activeImg4,
  nav1activeImg5,
  nav1activeImg6,
  nav1activeImg7,
}) {
  const [activePage1, setPage1] = useState(true);
  const [activePage2, setPage2] = useState(false);
  const [activePage3, setPage3] = useState(false);
  const [activePage4, setPage4] = useState(false);
  const [activePage5, setPage5] = useState(false);
  const [activePage6, setPage6] = useState(false);
  const [activePage7, setPage7] = useState(false);
  const [activeNav1, setNav1] = useState(true);
  const [activeNav2, setNav2] = useState(false);
  const [activeNav3, setNav3] = useState(false);
  const [activeNav4, setNav4] = useState(false);
  const [activeNav5, setNav5] = useState(false);
  const [activeNav6, setNav6] = useState(false);
  const [activeNav7, setNav7] = useState(false);

  const arrow = ">";
  return (
    <div className="changable--section--card" key={key}>
      <ul className="top">
        {nav1Icon1 && nav1Name1 && <li
          className={activeNav1 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(true);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(true);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        >
          <img src={nav1Icon1} alt="" />
          <p>{nav1Name1}</p>
        </li>}
        {nav1Icon2 && nav1Name2 && <li
          className={activeNav2 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(true);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(true);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        >
          <img src={nav1Icon2} alt="" />
          <p>{nav1Name2}</p>
        </li>}
        {nav1Name3 && nav1Icon3 && <li
          className={activeNav3 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(true);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(true);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        >
          <img src={nav1Icon3} alt="" />
          <p>{nav1Name3}</p>
        </li>}
        {nav1Name4 && nav1Icon4 && <li
          className={activeNav4 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(true);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(true);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        >
          <img src={nav1Icon4} alt="" />
          <p>{nav1Name4}</p>
        </li>}
        {nav1Name5 && nav1Icon5 && <li
          className={activeNav5 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(true);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(true);
            setPage6(false);
            setPage7(false);
          }}
        >
          <img src={nav1Icon5} alt="" />
          <p>{nav1Name5}</p>
        </li>}
        {nav1Name6 && nav1Icon6 && <li
          className={activeNav6 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(true);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(true);
            setPage7(false);
          }}
        >
          <img src={nav1Icon6} alt="" />
          <p>{nav1Name6}</p>
        </li>}
        {nav1Name7 && nav1Icon7 && <li
          className={activeNav7 ? "active" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(true);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(true);
          }}
        >
          <img src={nav1Icon7} alt="" />
          <p>{nav1Name7}</p>
        </li>}
      </ul>

      <ul className="bottom">
        {nav1Icon1 && nav1Name1 &&<li
          className={activeNav1 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(true);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(true);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        ></li>}
        {nav1Icon2 && nav1Name2 && <li
          className={activeNav2 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(true);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(true);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        ></li>}
        {nav1Name3 && nav1Icon3 && <li
          className={activeNav3 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(true);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(true);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        ></li>}
        {nav1Name4 && nav1Icon4 && <li
          className={activeNav4 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(true);
            setNav5(false);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(true);
            setPage5(false);
            setPage6(false);
            setPage7(false);
          }}
        ></li>}
       {nav1Name5 && nav1Icon5 && <li
          className={activeNav5 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(true);
            setNav6(false);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(true);
            setPage6(false);
            setPage7(false);
          }}
        ></li>}
        {nav1Name6 && nav1Icon6 && <li
          className={activeNav6 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(true);
            setNav7(false);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(true);
            setPage7(false);
          }}
        ></li>}
        {nav1Name7 && nav1Icon7 && <li
          className={activeNav7 ? "active--dot" : "not--active--dot"}
          onClick={() => {
            setNav1(false);
            setNav2(false);
            setNav3(false);
            setNav4(false);
            setNav5(false);
            setNav6(false);
            setNav7(true);
            // page
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
            setPage7(true);
          }}
        ></li>}
      </ul>
      <div className="changable">
        {activePage1 && nav1activeDef1 && nav1activeImg1 && (
          <div className={activePage1 ? "active--page safari" : "active--page"}>
            <p>{nav1activeDef1}</p>
            <Link>Learn more About {nav1Name1} {arrow}</Link>
            <img src={nav1activeImg1} alt="" />
          </div>
        )}
        {activePage2 && nav1activeDef2 && nav1activeImg2 && (
          <div className={activePage2 ? "active--page Photos" : "active--page"}>
            <p>{nav1activeDef2}</p>
            <Link>Learn more About {nav1Name2} {arrow}</Link>
            <img src={nav1activeImg2} alt="" />
          </div>
        )}
        {activePage3 && nav1activeDef3 && nav1activeImg3 && (
          <div className={activePage3 ? "active--page movies" : "active--page"}>
            <p>{nav1activeDef3}</p>
            <Link>Learn more About {nav1Name3} {arrow}</Link>
            <img src={nav1activeImg3} alt="" />
          </div>
        )}
        {activePage4 && nav1activeDef4 && nav1activeImg4 && (
          <div className={activePage4 ? "active--page garage" : "active--page"}>
            <p>{nav1activeDef4}</p>
            <Link>Learn more About {nav1Name4} {arrow}</Link>
            <img src={nav1activeImg4} alt="" />
          </div>
        )}
        {activePage5 && nav1activeDef5 && nav1activeImg5 && (
          <div className={activePage5 ? "active--page pages" : "active--page"}>
            <p>{nav1activeDef5}</p>
            <Link>Learn more About {nav1Name5} {arrow}</Link>
            <img src={nav1activeImg5} alt="" />
          </div>
        )}
        {activePage6 && nav1activeDef6 && nav1activeImg6 && (
          <div
            className={activePage6 ? "active--page Numbers" : "active--page"}>
            <p>{nav1activeDef6}</p>
            <Link>Learn more About {nav1Name6} {arrow}</Link>
            <img src={nav1activeImg6} alt="" />
          </div>
        )}
        {activePage7 &&  nav1activeImg7 && nav1activeImg7 && (
          <div
            className={activePage7 ? "active--page keynote" : "active--page"}>
            <p>{nav1activeDef7}</p>
            <Link>Learn more About {nav1Name7} {arrow}</Link>
            <img src={nav1activeImg7} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
