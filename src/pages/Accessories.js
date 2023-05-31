import { Link } from "react-router-dom";
import "./Accessories.css";
import Search from "../Components/Accessories/Search";
import AccessoriesChangable from "../Components/Accessories/AccessoriesChangable";
import Devices from "../Components/mac/Devices";
import DevicesSingle from "../Components/mac/DevicesSingle";
import DevicesSingleData from "../Components/mac/DeviceSingleData";
import AccessoriesIpadData from "../Components/Accessories/AccessoriesIpadData";
import AccessoriesWatchData from "../Components/Accessories/AccessoriesWatchData";
import { useState } from "react";
import StoreFifthScroll from "../Components/store/StoreFifthScroll";
import StoreFifthScrollData from "../Components/store/StoreFifthScrollData";
import MacService from "../Components/mac/MacService";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import StoreFooterLinks from "../Components/store/StoreFooterLinks";
import StoreBottomFooter from "../Components/store/StoreBottomFooter";
import AccessoriesAirPodData from "../Components/Accessories/AccessoresAirpodData";
import AccessoriesAirtagData from "../Components/Accessories/AccessoriesAirtagData";
import AccessoriesMacData from "../Components/Accessories/AccessoresMacData";

export default function Accessories() {
  const [showMore, setShowMore] = useState(false);
  const arrow = ">";
  const iphone = DevicesSingleData.map((data) => {
    return <DevicesSingle data={data} />;
  });
  const ipad = AccessoriesIpadData.map((data) => {
    return <DevicesSingle data={data} />;
  });
  const watch = AccessoriesWatchData.map((data) => {
    return <DevicesSingle data={data} />;
  });
  const airtag = AccessoriesAirtagData.map((data) => {
    return <DevicesSingle data={data} />;
  });
  const airpods = AccessoriesAirPodData.map((data) => {
    return <DevicesSingle data={data} />;
  });
  const mac = AccessoriesMacData.map((data) => {
    return <DevicesSingle data={data} />;
  });
  const showMoreList = () => {
    setShowMore(!showMore);
  };
  const storeFifthScroll = StoreFifthScrollData.map((data) => {
    return <StoreFifthScroll data={data} />;
  });
  return (
    <div className="whole--accrssories--container">
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
        <img src="./accessoriesImage/image_intro.png" alt="" />
      </div>
      <Search />
      <div>
        <AccessoriesChangable />
      </div>
      <Devices name="Iphone" iphone={iphone} />
      <Devices name="Ipad" iphone={ipad} />
      <Devices name="Watch" iphone={watch} />
      {showMore && (
        <div className="show--more--parent">
          <Devices name="airpod" iphone={airpods} />
          <Devices name="mac" iphone={mac} />
          <Devices name="airtag" iphone={airtag} />
        </div>
      )}
      <Link onClick={showMoreList} className="show--more">
        {showMore ? `Show less` : "Show more"}
      </Link>
      <div>
        <div
          className="store--fifth--scroll--container"
          style={{ width: "100%" }}
        >
          {storeFifthScroll}
        </div>
      </div>
      <div className="mac--service--container full--span">
        <MacService
          icon=<ViewInArIcon sx={{ fontSize: 50 }} />
          title="Fast delivery or pickup"
          description={`Enjoy two‑hour delivery from an \n Apple Store, free delivery, or \n easy pickup.`}
          linkText="Learn more"
        />
        <MacService
          icon=<MonetizationOnIcon sx={{ fontSize: 50 }} />
          title="Pay monthly at 0% APR"
          description={`You can pay over time when you \n choose to check out with Apple Card \n Monthly Installments.*`}
          linkText="Learn more"
        />
        <MacService
          icon=<MapsUgcIcon sx={{ fontSize: 50 }} />
          title="Get help buying"
          description={`Have a question? Call a Specialist or \n chat online. Call 1‑800-MY‑APPLE.`}
          linkText="Contact us"
        />
      </div>
      <div>
        <StoreFooterLinks />
        <StoreBottomFooter />
      </div>
    </div>
  );
}
