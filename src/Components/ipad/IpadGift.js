import { Link } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';


export default function IpadGift({ title, description,img1,img2,img3 }) {
  const arrow = ">";
  return (
    <div className="ipad--essential--card">
      <div className="text">
      <h1><AppleIcon sx={{fontSize:50}}/> {title}</h1>
        <p className="new-line">{description}</p>
        <Link>Shop {arrow}</Link>
        <Link>Learn More{arrow}</Link>
      </div>
      <div className="images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}
