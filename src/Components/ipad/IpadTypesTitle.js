import { Link } from "react-router-dom";

export default function IpadTypesTitle({ name }) {
  const arrow = ">";
  return (
    <div className="ipad--types--card">
      <div className="title">
        <h1>
          Which {name} is right <br /> for you?
        </h1>
        <Link>
          Compare all {name} models {arrow}
        </Link>
        <Link>
          Shop {name} {arrow}
        </Link>
      </div>
    </div>
  );
}
