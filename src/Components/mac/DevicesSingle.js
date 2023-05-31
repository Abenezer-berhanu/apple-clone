import React from "react";
import { Link } from "react-router-dom";

export default function DevicesSingle({
data
}) {
  const arrow = ">";
  return (
    <div className="device--single--card" key={data.id}>
      <div>
        {data.img && <img src={data.img} alt="" />}
        <div className="text">
          {data.status && <p className="status">{data.status}</p>}
          {data.description && <p className="description">{data.description}</p>}
          {data.price && <p className="price">{data.price}</p>}
          <div className="colors--container">
          {data.color1 && <span style={{backgroundColor: data.color1}}></span>}
          {data.color2 && <span style={{backgroundColor: data.color2}}></span>}
          {data.color3 && <span style={{backgroundColor: data.color3}}></span>}
          {data.color4 && <span style={{backgroundColor: data.color4}}></span>}
        </div>
        </div>
      </div>
      <div>
        <span className="active--circle"></span>
      </div>
      <Link>
        {data.linkText} {arrow}
      </Link>
    </div>
  );
}
