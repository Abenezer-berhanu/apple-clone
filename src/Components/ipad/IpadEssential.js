import { Link } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';

export default function IpadEssential({title,description,img,className}) {
    const arrow = ">";
  return (
    <div className={className}>
      <div className="text">
      <h1><AppleIcon sx={{fontSize:50}}/> {title}</h1>
      <p className="new-line">{description}</p>
      <Link>Shop {arrow}</Link>
      <Link>Learn More{arrow}</Link>
      </div>
      <img src={img} alt="" />
    </div>
  );
}
