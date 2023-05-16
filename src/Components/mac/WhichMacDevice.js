import { Link } from "react-router-dom";

export default function WhichMacDevice({name, img}) {
    const arrow = ">";
  return (
    <div className="which--mac--device--card">
      <div className="device--and--color">
        <img src={img} alt="" />
        <ul className="device--colors">
        <li className="color"></li>
        <li className="color"></li>
        <li className="color"></li>
        <li className="color"></li>
        </ul>
      </div>

      <div className="name--and--demand">
        <h2>{name}</h2>
        <p>M1 chip</p>
      </div>

      <div className="price--buy--link">
        <p>From $999</p>
        <button>buy</button>
        <Link to="/">Learn more {arrow}</Link>
      </div>
    </div>
  );
}
