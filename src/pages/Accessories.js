import { Link } from "react-router-dom";
import "./Accessories.css";
import Search from "../Components/Accessories/Search";

export default function Accessories() {
  const arrow = ">";
  return (
    <div>
      <div className="accessories--first">
        <div className="text">
          <h1>
            Mix. Match. <br /> MagSafe.
          </h1>
          <p>
            Snap on a case, wallet, wireless <br /> charger, or battery pack.
          </p>
          <Link>Shop MagSafe {arrow}</Link>
        </div>
        <img src="./imagesAccessories/Access_1.png" alt="" />
      </div>
      <Search />
    </div>
  );
}
