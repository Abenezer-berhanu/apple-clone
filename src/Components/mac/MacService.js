import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { Link } from "react-router-dom";

export default function MacService({ title, description, icon, linkText }) {
  const arrow = ">";
  return (
    <div className="mac--service--card">
      {icon}
      <h4>{title}</h4>
      <p className="new-line">{description}</p>
      <Link>
        {linkText} {arrow}
      </Link>
    </div>
  );
}
