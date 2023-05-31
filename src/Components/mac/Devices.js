import { Link } from "react-router-dom";
import DevicesSingle from "./DevicesSingle";
import DevicesSingleData from "./DeviceSingleData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect, useRef } from "react";

export default function Devices({ name, iphone }) {
  const [screenSize, setScreenSize] = useState((window.innerWidth / 148) * 100);
  const [arrowCount, setArrowCount] = useState(0);
  let scrollToLeft = useRef(null);


  const scrollFirstToLeft = () => {
    setArrowCount(arrowCount - 1);
    if (window.innerWidth < 733) {
        scrollToLeft.current.scrollLeft =
          scrollToLeft.current.scrollLeft - (window.innerWidth / 150) * 100;
      } else {
        scrollToLeft.current.scrollLeft =
          scrollToLeft.current.scrollLeft - (window.innerWidth / 147) * 100;
      }
  };
  const ScrollFirstToRight = () => {
    setArrowCount(arrowCount + 1);
      if (window.innerWidth < 733) {
        scrollToLeft.current.scrollLeft =
          scrollToLeft.current.scrollLeft + (window.innerWidth / 150) * 100;
      } else {
        scrollToLeft.current.scrollLeft =
          scrollToLeft.current.scrollLeft + (window.innerWidth / 147) * 100;
      }
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, [screenSize]);
  return (
    <div className="accessories--parent">
      <h1>Featured {name} Accessories</h1>
      <div className="left">
        {arrowCount >= 1 && (
          <ArrowBackIosNewIcon
            sx={{ fontSize: 40 }}
            onClick={scrollFirstToLeft}
          />
        )}
      </div>
      <div ref={scrollToLeft} className="single--container" id="single--container">
        {iphone}
      </div>
      <div className="right">
      {window.innerWidth > 733 && arrowCount <= 1 && (
          <ArrowForwardIosIcon
            sx={{ fontSize: 40 }}
            onClick={ScrollFirstToRight}
          />
        )}
        {window.innerWidth < 733 && arrowCount <= 4 && (
          <ArrowForwardIosIcon
            sx={{ fontSize: 40 }}
            onClick={ScrollFirstToRight}
          />
        )}
      </div>
      <Link>shop all {name}</Link>
    </div>
  );
}
